import { Box, Text, HStack, Heading, Button, Image } from "@chakra-ui/react";
import { Element } from "react-scroll";
import { handleResume } from "../resume";
import { AiOutlineDownload } from "react-icons/ai";
import aboutimg from "../images/aboutImg.jpg";

export function About() {
  return (
    <Element name="aboutSection" id="about" className="about section">
      <Box textAlign="center" mb={{ base: 8, md: 0 }}>
        {/* Heading with responsive font sizes */}
        <Heading as="h1" size="xl" color="white" mb={2}>
          About
        </Heading>
        <Heading
          as="h1"
          fontSize={{ base: "xl", md: "3xl", lg: "4xl" }}
          color="black"
          mb={{ base: 5, md: 10, lg: 50 }}
        >
          About
        </Heading>
      </Box>

      <HStack
        w="100%"
        maxW={{ base: "80%", md: "60%" }}
        mx="auto"
        spacing={{ base: 4, md: 8 }}
      >
        {/* Image hidden on md and base screen sizes */}
        <Box
          display={{ base: "none", md: "block" }}
          w={{ base: "0", lg: "70%" }}
          bg="gray.200"
          borderRadius="50%"
        >
          <Image src={aboutimg} alt="" borderRadius="50%" />
        </Box>

        <Box
          bg="white"
          w={{ base: "100%", lg: "100%" }}
          p={{ base: 6, md: 6 }}
          rounded={10}
        >
          <ul style={{ listStyleType: "disc", listStylePosition: "outside" }}>
            <li>
              <Text
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                id="user-detail-intro"
                mb={{ base: 2, lg: 5 }}
              >
                A passionate full-stack web developer with expertise in HTML,
                CSS, JavaScript, React, Node.js, and a strong background in
                building scalable and high-performance web applications.
              </Text>
            </li>
            <li>
              <Text
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                mb={{ base: 2, lg: 5 }}
              >
                I hold a BTech degree in Instrumentation and Control
                Engineering, equipping me with a strong foundation in
                engineering principles and problem-solving.
              </Text>
            </li>
            <li>
              <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                I am enthusiastic about joining a team that fosters continuous
                learning and allowing me to expand my skills and knowledge.
              </Text>
            </li>
          </ul>
        </Box>
      </HStack>

      <Box mt={8} textAlign="center">
        {/* Button with responsive font size */}
        <Button
          id="resume-button-2"
          onClick={() => handleResume()}
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
          color="white"
          border="none"
          px={{ base: 2, md: 5 }}
          py={{ base: 2, md: 4 }}
          rounded="md"
          bg="#1DA1F2"
          _hover={{ bg: "#0c89c3" }}
        >
          Resume <AiOutlineDownload />
        </Button>
      </Box>
    </Element>
  );
}
