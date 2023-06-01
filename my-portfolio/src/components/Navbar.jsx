import { Button, Flex, Spacer } from "@chakra-ui/react"
import { Link } from "react-scroll";
import "../App.css"
import { handleResume } from "../resume";

function Navbar() {


  
    return (
      <Flex justify="flex-end" align="center" bg="black" color="white" p={4} as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={10}>
        <Flex justify="flex-end" align="center"  id="nav-menu" mr={30}>
          <Link bg="#318ce7" color="black" border="none" p={40} className="nav-link home" to="homeSection" smooth={true} duration={500}>Home</Link>
          <Link bg="#318ce7" color="black" border="none" mr={4} className="nav-link about" to="aboutSection" smooth={true} duration={500}>About Me</Link>
          <Link bg="#318ce7" color="black" border="none" mr={4} className="nav-link skills" to="skillsSection" smooth={true} duration={500}>Skills</Link>  
          <Link bg="#318ce7" color="black" border="none" mr={4} className="nav-link projects" to="projectSection" smooth={true} duration={500}>Projects</Link>
          <Link bg="#318ce7" color="black" border="none" mr={4} className="nav-link contact" to="contactSection" smooth={true} duration={500}>Contact</Link>
          <Button className="nav-link resume" id="resume-button-1" onClick={()=>handleResume()} 
                  bg={"white"} border={"none"}  borderRadius={5} p={10} fontSize={15}>Resume</Button>
        </Flex>
      </Flex>
    );
  }
  
  export default Navbar;