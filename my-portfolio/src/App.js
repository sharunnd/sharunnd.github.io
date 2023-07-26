
import { useRef } from 'react';
import './App.css';
import { About } from './components/About';
import { Contact } from './components/Contact';
import  Navbar  from './components/Navbar';
import { Home } from './components/Home';
import { Skills } from './components/Skills';
import { Project } from './components/Projects';
import { Calender } from './components/Calender';
import { Empty } from './components/Empty';



function App() {
  

  // const scrollToSection = (elementRef) => {
  //   window.scrollTo({
  //     top:elementRef.current.offsetTop,
  //     behavior: 'smooth'
  //   })
  // }
 
  return (
    <>
    <Navbar />
    <Home />
    <About />
    {/* <Skills /> */}
    <Calender />
    {/* <Project /> */}
    <Contact />
    </>
    
  );
}

export default App;
