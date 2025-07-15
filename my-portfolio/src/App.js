import './App.css';
import { About } from './components/About';
import { Contact } from './components/Contact';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import { Skills } from './components/Skills';
import { Project } from './components/Projects';
import { Calender } from './components/Calender';
import "./custom-scroll-bar.css"
import { Box } from '@chakra-ui/react';
import ScrollIcon from './components/ScrollIcon';

function App() {
  
  return (
    <Box>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Calender />
      <Project />
      <Contact />
      <ScrollIcon />
    </Box>
  );
}

export default App;
