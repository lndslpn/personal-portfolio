import { useState } from 'react'
import { default as Hero } from './sections/Hero.jsx';
import { default as Navbar }  from './components/Header.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Education from './sections/Education.jsx';
import Experience from './sections/Experience.jsx';
import Leadership from './sections/Leadership.jsx';
import Projects from './sections/Projects.jsx';
import Contact from './sections/Contact.jsx';
import { default as Footer }  from './components/Footer.jsx';

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Leadership />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );

}

export default App
