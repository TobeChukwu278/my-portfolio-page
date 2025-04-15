import { React, useRef, useEffect } from 'react';
import Hero from './components/hero';
import About from './components/about'
import Projects from './components/projects';
import Skill from './components/skills';
import Contact from './components/contact';
import Footer from './components/footer'
import './index.css';
import './App.css';

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            componentRef.current.classList.add('active');
            observer.unobserve(componentRef.current); // Stop observing after revealing
          }
        });
      },
      {
        threshold: 0.1, // Adjust this threshold as needed (0.1 means 10% of the element is visible)
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <>
      <div >
        <Hero />
        <About />
        <Projects />
        <Skill />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
