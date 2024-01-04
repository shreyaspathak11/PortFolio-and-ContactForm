// App.js
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import Profile from './components/Profile';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';


const App = () => {
  return (
    <Router>
      <div className="App">
        
        <Profile />
        <AboutMe />
        <Skills />
        <Projects />
        <CodingProfiles />
        <Contact />
        <Footer />
    
      </div>
      </Router> 
  );
};

export default App;
