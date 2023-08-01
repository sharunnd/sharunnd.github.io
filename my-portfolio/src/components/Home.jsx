import {
  Box,
  Text,
  Image,
  HStack,
  Link,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { Element } from "react-scroll";
import profilePic from "../images/profile-pic.jpg";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import TypeWriterEffect from "react-typewriter-effect";

export function Home() {
  const fontSize = {
    base: "20px", // Adjust the base font size as needed
    md: "30px", // Adjust the medium screen font size as needed
    lg: "40px", // Adjust the large screen font size as needed
  };
  return (
    <Element name="homeSection" id="home">
      <Flex
        width="100%"
        direction={{ base: "column", lg: "row" }} // Stack on base, row on large screens
        justifyContent="space-between"
        alignItems={"center"} // Center vertically on base, flex-start on large screens
        padding={{ base: "10%", sm: "20%", md: "10%", lg: "10%" }}
        // border="1px solid green"
        pt={{ base: "25%" }}
      >
        <Box
          width={{ base: "100%", md: "80%", lg: "50%" }}
          textAlign={{ md: "left" }}
          boxShadow="xs"
          borderRadius="10px"
          bg="#EDF2F7"
          p={{ base: 6, md: 8 }}
          // border="1px solid red"
        >
          <Text
            fontFamily={"initial"}
            fontSize={{ base: fontSize.base, md: fontSize.md, lg: fontSize.lg }}
            fontWeight={700}
            color="#100f0f"
          >
            Hi, I'm
          </Text>
          <Text
            fontSize={{ base: fontSize.base, md: fontSize.md, lg: fontSize.lg }}
            fontWeight={700}
            color="#1DA1F2"
          >
            Sharun N D
          </Text>
          <Box
            color="#1DA1F2"
            fontSize={{ base: fontSize.base, md: fontSize.md, lg: fontSize.lg }}
          >
            <TypeWriterEffect
              startDelay={100}
              cursorColor="#1DA1F2"
              text="Full Stack Web Developer"
              typeSpeed={100}
              loop={true}
            />
          </Box>
          <Text fontSize={{ base: 16, md: 18 }} color="#444c61" mt={2}>
            A full-stack web developer who's passionate about turning ideas into
            reality. I'm dedicated to delivering high-quality products that are
            both visually stunning and highly functional.
          </Text>
          <HStack spacing={4} mt={2}>
            <Link
              href="https://github.com/sharunnd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton
                bg="#EDF2F7"
                _hover={{ bg: "#1DA1F2", color: "white" }}
                icon={<AiFillGithub />}
                fontSize={20}
                rounded={"50%"}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/sharun-n-d-8351191b3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton
                bg="#EDF2F7"
                _hover={{ bg: "#1DA1F2", color: "white" }}
                icon={<AiOutlineLinkedin />}
                fontSize={20}
                rounded={"50%"}
              />
            </Link>
          </HStack>
        </Box>
        <Box
          marginTop={{ base: 4, lg: 0 }}
          borderRadius="10px"
          // border="1px solid blue"
          width={{ base: "100%", lg: "45%" }} // Full width on base, 45% width on large screens
          display="flex"
          justifyContent="center"
        >
          <Image
            src={profilePic}
            className="home-img"
            borderRadius="10px"
            boxSize={{ base: "150px", md: "180px", lg: "150px" }} // image size for different screens
            alt="sharun"
          />
        </Box>
      </Flex>
    </Element>
  );
}
