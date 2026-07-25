import { useState, useEffect, lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import ScrollToTop from "./components/ScrollToTop";

// Split per route so the initial bundle carries only what the landing page
// needs. These were written as lazy imports originally but left commented
// out next to eager ones, so nothing was ever split.
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const ContactMe = lazy(() => import("./pages/ContactMe"));
const ProjectDeets = lazy(() => import("./components/ProjectDeets"));

const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  // exit previously animated *to* opacity 1, so `mode="wait"` held the old
  // page for the full duration with nothing visibly happening. At 1.1s that
  // read as a freeze rather than a transition.
  const fade = prefersReducedMotion
    ? { initial: false, animate: { opacity: 1 }, exit: { opacity: 1 } }
    : {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 },
      };

  return (
    <div className="w-full min-h-screen bg-bg text-primary">
      <Navbar />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          {...fade}
          transition={{ duration: prefersReducedMotion ? 0 : 0.28 }}
        >
          <Suspense
            fallback={<div className="min-h-screen" aria-busy="true" />}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDeets />} />
              <Route path="/contact" element={<ContactMe />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;
