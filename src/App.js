import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

import Nav from './components/Nav';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const App = () => {
  const location = useLocation()
  console.log(location)

  return (
    <>
      <Nav />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;