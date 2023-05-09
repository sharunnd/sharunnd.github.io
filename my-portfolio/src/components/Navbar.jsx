import { Button, Flex } from "@chakra-ui/react"
import { Link } from "react-scroll";
import "../App.css"
// const resumeUrl = "https://drive.google.com/file/d/186-jrDQGmG8MTNWV1qRmwsoI8k0Iyv78/view?usp=share_link"
function Navbar() {
const resumeUrl = "https://drive.google.com/file/d/186-jrDQGmG8MTNWV1qRmwsoI8k0Iyv78/view?usp=share_link"

    const handleResume = () =>{
      window.open(resumeUrl,"_blank")
    }
    return (
      <Flex justify="flex-end" align="center" bg="black" color="white" p={4}>
        <Flex justify="flex-end" align="center"  id="nav-menu">
          <Link bg="#318ce7" color="black" border="none" mr={4} className="nav-link home" to="homeSection" smooth={true} duration={500}>Home</Link>
          <Link bg="#318ce7" color="black" border="none" mr={4} className="nav-link about" to="aboutSection" smooth={true} duration={500}>About Me</Link>
          <Link bg="#318ce7" color="black" border="none" mr={4} className="nav-link skills" to="skillsSection" smooth={true} duration={500}>Skills</Link>
          <Link bg="#318ce7" color="black" border="none" mr={4} className="nav-link projects" to="projectSection" smooth={true} duration={500}>Projects</Link>
          <Link bg="#318ce7" color="black" border="none" mr={4} className="nav-link contact" to="contactSection" smooth={true} duration={500}>Contact</Link>
          <Button as="a" rel="noopener noreferrer" href={resumeUrl} target="_blank" className="nav-link resume" download={"Sharun-ND-Resume"}>Resume</Button>
        </Flex>
      </Flex>
    );
  }
  
  export default Navbar;