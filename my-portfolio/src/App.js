import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Project } from "./components/Projects";
import { TechStack } from "./components/TechStack";
import { GitHubActivity } from "./components/GitHubActivity";
import { Contact } from "./components/Contact";
import Footer from "./components/Footer";
import ScrollIcon from "./components/ScrollIcon";
import ColorModeSync from "./components/ui/ColorModeSync";

function App() {
  return (
    <Box bg="bg.canvas" color="text.primary" minH="100vh">
      <ColorModeSync />

      <Box
        as="a"
        href="#homeSection"
        position="absolute"
        left={4}
        top={4}
        zIndex={200}
        px={4}
        py={2}
        bg="bg.card"
        color="text.primary"
        border="1px solid"
        borderColor="border.strong"
        borderRadius="sm"
        transform="translateY(-150%)"
        transition="transform 160ms var(--ease-soft)"
        _focusVisible={{ transform: "translateY(0)" }}
      >
        Skip to content
      </Box>

      <Navbar />

      <Box as="main">
        <Home />
        <About />
        <Experience />
        <Skills />
        <Project />
        <TechStack />
        <GitHubActivity />
        <Contact />
      </Box>

      <Footer />
      <ScrollIcon />
    </Box>
  );
}

export default App;
