import { useLayoutEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { buildNetwork, readToken } from "./network";
import { useTheme } from "../../hooks/useTheme";

const PULSE_COUNT = 16;

function Nodes({ nodes, color }) {
  const ref = useRef();

  useLayoutEffect(() => {
    const matrix = new THREE.Matrix4();
    nodes.forEach((node, i) => {
      matrix.setPosition(node.x, node.y, node.z);
      ref.current.setMatrixAt(i, matrix);
    });
    ref.current.instanceMatrix.needsUpdate = true;
  }, [nodes]);

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, nodes.length]}>
      <sphereGeometry args={[0.14, 16, 16]} />
      <meshBasicMaterial color={color} />
    </instancedMesh>
  );
}

function Edges({ edges, color }) {
  const geometry = useMemo(() => {
    const positions = new Float32Array(edges.length * 6);
    edges.forEach(([a, b], i) => {
      positions.set([a.x, a.y, a.z, b.x, b.y, b.z], i * 6);
    });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [edges]);

  useLayoutEffect(() => () => geometry.dispose(), [geometry]);

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color={color} transparent opacity={0.32} />
    </lineSegments>
  );
}

/** Signals travelling along connections — the reason this is animated at all. */
function Pulses({ edges, color }) {
  const ref = useRef();

  // Seeded on the first frame rather than in a useMemo: Math.random during
  // render is impure, and the frame loop is the right place for it.
  const pulses = useRef(null);

  const matrix = useMemo(() => new THREE.Matrix4(), []);
  const point = useMemo(() => new THREE.Vector3(), []);
  const from = useMemo(() => new THREE.Vector3(), []);
  const to = useMemo(() => new THREE.Vector3(), []);

  useFrame((_, delta) => {
    if (!ref.current) return;

    if (!pulses.current) {
      pulses.current = Array.from({ length: PULSE_COUNT }, () => ({
        edge: Math.floor(Math.random() * edges.length),
        t: Math.random(),
        speed: 0.18 + Math.random() * 0.3,
      }));
    }

    pulses.current.forEach((pulse, i) => {
      pulse.t += delta * pulse.speed;
      if (pulse.t > 1) {
        pulse.t = 0;
        pulse.edge = Math.floor(Math.random() * edges.length);
      }
      const [a, b] = edges[pulse.edge];
      from.set(a.x, a.y, a.z);
      to.set(b.x, b.y, b.z);
      point.lerpVectors(from, to, pulse.t);
      matrix.setPosition(point);
      ref.current.setMatrixAt(i, matrix);
    });
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, PULSE_COUNT]}>
      <sphereGeometry args={[0.06, 8, 8]} />
      <meshBasicMaterial color={color} />
    </instancedMesh>
  );
}

/** Damped pointer parallax. A few degrees only — this is a backdrop. */
function CameraRig() {
  const { camera, pointer } = useThree();
  const target = useMemo(() => new THREE.Vector3(), []);

  useFrame(() => {
    target.set(pointer.x * 1.1, pointer.y * 0.7, 9);
    camera.position.lerp(target, 0.035);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function Network() {
  const group = useRef();
  const { theme } = useTheme();
  const { nodes, edges } = useMemo(() => buildNetwork(), []);

  // Re-read on theme change so the scene tracks the light/dark tokens.
  const colors = useMemo(
    () => ({
      accent: readToken("--accent", "#4ade80"),
      edge: readToken("--text-secondary", "#a3a3a3"),
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [theme]
  );

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.08) * 0.22;
  });

  return (
    <group ref={group}>
      <Edges edges={edges} color={colors.edge} />
      <Nodes nodes={nodes} color={colors.accent} />
      <Pulses edges={edges} color={colors.accent} />
    </group>
  );
}

/**
 * Fires once the scene has actually drawn, which is what the poster fade
 * waits on. A timer would fade the poster out even when nothing rendered —
 * a throttled tab, a lost context — leaving an empty hero.
 */
function FirstFrameSignal({ onReady }) {
  const fired = useRef(false);
  useFrame(() => {
    if (fired.current) return;
    fired.current = true;
    onReady();
  });
  return null;
}

const NeuralScene = ({ onReady }) => (
  <Canvas
    // Capped so high-DPI displays do not quadruple the fragment cost for a
    // backdrop nobody inspects pixel-for-pixel.
    dpr={[1, 1.5]}
    camera={{ position: [0, 0, 9], fov: 42 }}
    gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
    style={{ pointerEvents: "none" }}
  >
    <CameraRig />
    <Network />
    <FirstFrameSignal onReady={onReady} />
  </Canvas>
);

export default NeuralScene;
