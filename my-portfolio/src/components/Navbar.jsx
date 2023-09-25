
import { useEffect, useState } from "react";
import { Button, Flex, Heading, Spacer, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-scroll";
import "../App.css";
import { handleResume } from "../resume";

function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const [isSmScreen, setIsSmScreen] = useState(false);

  // Function to check if the screen size is small (md and sm screens)
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsSmScreen(true);
    } else {
      setIsSmScreen(false);
    }
  };

  // Check the screen size on initial mount
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Flex
      justify="flex-end"
      align="center"
      bg="#1DA1F2"
      color="white"
      p={2}
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={10}
    >
      <Heading as="h1" size="lg" ml={4} mr={"auto"}>
        Sharun
      </Heading>

      {isSmScreen ? (
        <>
          <Button
            onClick={onToggle}
            bg="transparent"
            border="none"
            color="white"
            _focus={{ outline: "none" }}
            _hover={{ bg: "transparent" }}
          >
            &#9776;
          </Button>
          {isOpen && (
            <Flex
              direction="column"
              bg="#1DA1F2"
              position="absolute"
              top="56px"
              right="0"
              p={4}
              borderRadius="md"
            >
              <Link
                display="block"
                border="none"
                my={2}
                className="nav-link home"
                to="homeSection"
                smooth={true}
                duration={500}
                onClick={onToggle}
              >
                Home
              </Link>
              <Link
                display="block"
                border="none"
                my={2}
                className="nav-link about"
                to="aboutSection"
                smooth={true}
                duration={500}
                onClick={onToggle}
              >
                About
              </Link>
              <Link
                border="none"
                mr={4}
                className="nav-link skills"
                to="skillsSection"
                smooth={true}
                duration={500}
                onClick={onToggle}
              >
                Skills
              </Link>
              <Link
                border="none"
                mr={4}
                className="nav-link projects"
                to="projectSection"
                smooth={true}
                duration={500}
                onClick={onToggle}
              >
                Projects
              </Link>
              <Link
                border="none"
                mr={4}
                className="nav-link contact"
                to="contactSection"
                smooth={true}
                duration={500}
                onClick={onToggle}
              >
                Contact
              </Link>
            </Flex>
          )}
        </>
      ) : (
        <Flex justify="flex-end" align="center" id="nav-menu" mr={30}>
          <Link
            border="none"
            p={4}
            className="nav-link home"
            to="homeSection"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
          <Link
            border="none"
            mr={4}
            className="nav-link about"
            to="aboutSection"
            smooth={true}
            duration={500}
          >
            About
          </Link>
          <Link
            border="none"
            mr={4}
            className="nav-link skills"
            to="skillsSection"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
          <Link
            border="none"
            mr={4}
            className="nav-link projects"
            to="projectSection"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
          <Link
            border="none"
            mr={4}
            className="nav-link contact"
            to="contactSection"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </Flex>
      )}
      <Button
        className="nav-link resume"
        id="resume-button-1"
        onClick={() => handleResume()}
        bg={"white"}
        border={"none"}
        color={"black"}
        borderRadius={5}
        p={5}
        fontSize={15}
      >
        Resume
      </Button>
    </Flex>
  );
}

export default Navbar;
