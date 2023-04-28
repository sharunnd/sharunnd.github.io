import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Box, Button, HStack, Text } from '@chakra-ui/react';
import { useRef } from 'react';

function App() {
  const section = useRef(null)

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top:elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }
  return (
    <Box className="App">
      <Box border="1px solid red" bg="black">
      <HStack ml={800} spacing={30} border="1px solid black" p={20} fontSize={20} color="white">
            <Box>Home</Box>
            <Box onClick={()=>scrollToSection(section)}>About Me</Box>
            <Box>Skills</Box>
            <Box>Projects</Box>
            <Box>Contacts</Box>
            <Button bg="black" color="white" border="none" fontSize={20}>Resume</Button>
        </HStack>
        </Box>
      <Box height="100vh" bg={'gray.100'}>
        <Box textAlign="left">
          <Text>I'm</Text>
          <Text>Sharun N D</Text>
          <Text>Full Stack Web Developer</Text>
        </Box>
      </Box>
      <Box ref={section} height="100vh" bg="yellow">
        section 2
      </Box>
      <Box height="100vh" bg={'tomato'}>
        section 3
      </Box>
    </Box>
  );
}

export default App;
