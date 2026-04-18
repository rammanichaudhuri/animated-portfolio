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
import Noise from './components/Noise';

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
        <div className='countUp-inner'>
          <CountUp
            from={0}
            to={100}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text"
            startCounting={false}
          />
          <span className='countUp-label'>loading</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Noise patternAlpha={10} patternRefreshInterval={3} />
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
    </div>
  );
}

export default App;
