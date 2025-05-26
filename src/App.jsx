import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AnimatePresence, motion } from 'framer-motion';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';
import ProjectDeets from './components/ProjectDeets';

// const Home = lazy(() => import('./pages/Home'));
// const About = lazy(() => import('./pages/About'));
// const Projects = lazy(() => import('./pages/Projects'));
// const ContactMe = lazy(() => import('./pages/ContactMe'));
// const ProjectDeets = lazy(() => import('./components/ProjectDeets'));

const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return loading ? (
    <Loader />
  ) :
  (
    <div className={`w-full min-h-screen bg-darkBg text-textPrimary transition-opacity duration-700 overflow-hidden`}>
      <Navbar />
      <AnimatePresence mode='wait'>
      <Suspense>
        <motion.div key={location.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 1 }} transition={{ duration: 1.1 }}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />} />
            <Route path="/projects/" element={<Projects page={"PROJECTS"}/>} />
            <Route path="/projects/:id" element={<ProjectDeets />} />
            <Route path="/contact" element={<ContactMe />} />
          </Routes>
        </motion.div>
      </Suspense>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;
