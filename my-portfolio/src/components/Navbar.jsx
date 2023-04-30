import {Button, Flex, } from "@chakra-ui/react"
// import {Link as scrollLink} from "react-scroll"
import { Link } from "react-scroll";
import "../App.css"
function Navbar() {
    
    return (
      <Flex justify="flex-end" align="center" bg="black" color="white" p={4}>
        <Flex justify="flex-end" align="center"  id="nav-menu">
          <Link bg="#318ce7" color="black" border="none" mr={4} id="home" to="homeSection" smooth={true} duration={500}>Home</Link>
          <Link bg="#318ce7" color="black" border="none" mr={4} id="about" className="about section" to="aboutSection" smooth={true} duration={500}>About Me</Link>
          <Link bg="#318ce7" color="black" border="none" mr={4} id="skills" to="skillsSection" smooth={true} duration={500}>Skills</Link>
          <Link bg="#318ce7" color="black" border="none" mr={4} id="projects" to="projectSection" smooth={true} duration={500}>Projects</Link>
          <Link bg="#318ce7" color="black" border="none" mr={4} id="contact" to="contactSection" smooth={true} duration={500} className="my-link">Contact</Link>
          {/* <scrollLink bg="#318ce7" color="black" border="none" mr={4}><Link href="#">Resume</Link></scrollLink> */}
        </Flex>
      </Flex>
    );
  }
  
  export default Navbar;