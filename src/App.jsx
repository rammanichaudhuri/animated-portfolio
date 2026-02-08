import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import HomePage from './components/main';
import About from './components/about/About'
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import { Navbar } from './components/navbar/navbar';
import { AnimatePresence } from 'framer-motion';
import { Transition } from './Transition';
import { useState, useEffect } from 'react';
import CountUp from './CountUp';
import Cursor from './Cursor';
import Silk from './components/Silk';

function App() {
  const location = useLocation();
  const [showA, setShowA] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setShowA(false)
    }, 4200);
    return () => {
      clearTimeout(timerId);
    };
  }, []);

  if (showA) {
    return (
      <div className='countUp'>
        <CountUp
          from={0}
          to={100}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text"
          startCounting={false}
        />
      </div>
    );
  }

  return (
    <>
      <div className='silk'>
        <Silk speed={5}
          scale={1}
          color="#7B7481"
          noiseIntensity={1.5}
          rotation={0} />
      </div>
      <Cursor />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname} initial={false}>
          <Route path='/' element={
            <Transition>
              <HomePage />
            </Transition>
          } />
          <Route path='/projects' element={
            <Transition>
              <Projects />
            </Transition>} />
          <Route path='/about' element={
            <Transition>
              <About />
            </Transition>} />
          <Route path='/contact' element={
            <Transition>
              <Contact />
            </Transition>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
