import { Button, Flex } from "@chakra-ui/react"
import { Link } from "react-scroll";
import "../App.css"
import { handleResume } from "../resume";

function Navbar() {


  
    return (
      <Flex justify="flex-end" align="center" bg="black" color="white" p={4}>
        <Flex justify="flex-end" align="center"  id="nav-menu">
          <Link bg="#318ce7" color="black" border="none" mr={4} className="nav-link home" to="homeSection" smooth={true} duration={500}>Home</Link>
          <Link bg="#318ce7" color="black" border="none" mr={4} className="nav-link about" to="aboutSection" smooth={true} duration={500}>About Me</Link>
          <Link bg="#318ce7" color="black" border="none" mr={4} className="nav-link skills" to="skillsSection" smooth={true} duration={500}>Skills</Link>
          <Link bg="#318ce7" color="black" border="none" mr={4} className="nav-link projects" to="projectSection" smooth={true} duration={500}>Projects</Link>
          <Link bg="#318ce7" color="black" border="none" mr={4} className="nav-link contact" to="contactSection" smooth={true} duration={500}>Contact</Link>
          <Button className="nav-link resume" id="resume-button-1" onClick={()=>handleResume()}>Resume</Button>
        </Flex>
      </Flex>
    );
  }
  
  export default Navbar;