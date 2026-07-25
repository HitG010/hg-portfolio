import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { buildNetwork, readToken } from "./network";
import { useTheme } from "../../hooks/useTheme";

const PULSE_COUNT = 22;
// World-space radius within which the cursor excites a node.
const INFLUENCE = 4.5;

/**
 * Nodes brighten and swell as the cursor approaches, and settle back when it
 * leaves. Excitation is smoothed per node rather than applied directly from
 * distance, so moving the pointer quickly leaves a short trail of still-lit
 * nodes instead of a hard on/off edge.
 */
function Nodes({ nodes, baseColor, activeColor, cursor }) {
  const ref = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const base = useMemo(() => new THREE.Color(baseColor), [baseColor]);
  const active = useMemo(() => new THREE.Color(activeColor), [activeColor]);
  const scratch = useMemo(() => new THREE.Color(), []);
  const excitation = useRef(new Float32Array(nodes.length));

  useLayoutEffect(() => {
    excitation.current = new Float32Array(nodes.length);
  }, [nodes.length]);

  useFrame((_, delta) => {
    if (!ref.current) return;
    const damping = Math.min(1, delta * 4);

    nodes.forEach((node, i) => {
      const dx = node.x - cursor.current.x;
      const dy = node.y - cursor.current.y;
      const distance = Math.hypot(dx, dy);
      const target = Math.max(0, 1 - distance / INFLUENCE);

      const current = excitation.current[i];
      const next = current + (target - current) * damping;
      excitation.current[i] = next;

      dummy.position.set(node.x, node.y, node.z);
      dummy.scale.setScalar(1 + next * 2.2);
      dummy.updateMatrix();
      ref.current.setMatrixAt(i, dummy.matrix);

      scratch.copy(base).lerp(active, next);
      ref.current.setColorAt(i, scratch);
    });

    ref.current.instanceMatrix.needsUpdate = true;
    if (ref.current.instanceColor) ref.current.instanceColor.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, nodes.length]}>
      <sphereGeometry args={[0.06, 12, 12]} />
      <meshBasicMaterial toneMapped={false} />
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
      <lineBasicMaterial color={color} transparent opacity={0.18} />
    </lineSegments>
  );
}

/** Signals travelling along connections — the reason this is animated at all. */
function Pulses({ edges, color }) {
  const ref = useRef();
  const pulses = useRef(null);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const point = useMemo(() => new THREE.Vector3(), []);
  const from = useMemo(() => new THREE.Vector3(), []);
  const to = useMemo(() => new THREE.Vector3(), []);

  useFrame((_, delta) => {
    if (!ref.current) return;

    // Seeded on the first frame rather than during render, where Math.random
    // would be an impure call.
    if (!pulses.current) {
      pulses.current = Array.from({ length: PULSE_COUNT }, () => ({
        edge: Math.floor(Math.random() * edges.length),
        t: Math.random(),
        speed: 0.16 + Math.random() * 0.3,
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
      dummy.position.copy(point);
      // Fade in and out at the ends so pulses do not pop at nodes.
      dummy.scale.setScalar(Math.sin(pulse.t * Math.PI) * 0.9 + 0.15);
      dummy.updateMatrix();
      ref.current.setMatrixAt(i, dummy.matrix);
    });
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, PULSE_COUNT]}>
      <sphereGeometry args={[0.035, 8, 8]} />
      <meshBasicMaterial color={color} toneMapped={false} />
    </instancedMesh>
  );
}

/**
 * The canvas sits under the whole page with pointer-events: none, so it never
 * receives pointer events and R3F's own `state.pointer` would stay at the
 * origin. Tracking on window instead keeps the backdrop click-through while
 * still following the cursor.
 */
function useWindowPointer() {
  const ndc = useRef(new THREE.Vector2(0, 0));

  useEffect(() => {
    const onMove = (event) => {
      ndc.current.set(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      );
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return ndc;
}

function Network({ onReady }) {
  const group = useRef();
  const fired = useRef(false);
  const { theme } = useTheme();
  const { nodes, edges } = useMemo(() => buildNetwork(), []);

  // Cursor position projected onto the z=0 plane, in world units.
  const cursor = useRef(new THREE.Vector2(999, 999));
  const pointer = useWindowPointer();
  const { viewport } = useThree();

  const colors = useMemo(
    () => ({
      node: readToken("--text-secondary", "#a3a3a3"),
      accent: readToken("--accent", "#4ade80"),
      edge: readToken("--text-secondary", "#a3a3a3"),
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [theme]
  );

  useFrame((state) => {
    const { x: px, y: py } = pointer.current;
    cursor.current.set((px * viewport.width) / 2, (py * viewport.height) / 2);

    if (group.current) {
      group.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.06) * 0.18 + px * 0.12;
      group.current.rotation.x = -py * 0.08;
    }

    if (!fired.current) {
      fired.current = true;
      onReady();
    }
  });

  return (
    <group ref={group}>
      <Edges edges={edges} color={colors.edge} />
      <Nodes
        nodes={nodes}
        baseColor={colors.node}
        activeColor={colors.accent}
        cursor={cursor}
      />
      <Pulses edges={edges} color={colors.accent} />
    </group>
  );
}

const NeuralScene = ({ onReady }) => (
  <Canvas
    // Capped so high-DPI displays do not quadruple the fragment cost for a
    // backdrop nobody inspects pixel-for-pixel.
    dpr={[1, 1.5]}
    camera={{ position: [0, 0, 13], fov: 55 }}
    gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
    style={{ pointerEvents: "none" }}
  >
    <Network onReady={onReady} />
  </Canvas>
);

export default NeuralScene;
