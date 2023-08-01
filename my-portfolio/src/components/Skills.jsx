import {
  Box,
  SimpleGrid,
  Image,
  Text,
  Heading,
  Button,
  Flex,
} from "@chakra-ui/react";
import { Element } from "react-scroll";
import htmlSkill from "../images/html.png";
import cssSkill from "../images/css.png";
import reactSkill from "../images/react.png";
import reduxSkill from "../images/redux.png";
import chakraSkill from "../images/chakraui.png";
import jsSkill from "../images/javascript.png";
import tsSkill from "../images/typescript.png";
import nodejs from "../images/nodejs.png";
import express from "../images/express.png";
import mongodb from "../images/mongodb.png";
import tailwind from "../images/tailwind.png";
import mongoose from "../images/mongoose.png";
import git from "../images/git.png";
import postman from "../images/postman.png";

export function Skills() {
  return (
    <Element name="skillsSection" id="skills">
      <Box textAlign="center" mb={{ base: 8, md: 0 }}>
        {/* Heading with responsive font sizes */}
        <Heading as="h1" size="xl" color="white" mb={2}>
          skills
        </Heading>
        <Heading
          as="h1"
          fontSize={{ base: "xl", md: "3xl", lg: "4xl" }}
          mt={{ base: 5, md: 10, lg: 20 }}
          color="black"
          mb={{ base: 5, md: 10, lg: 50 }}
        >
          Skills
        </Heading>
      </Box>
      <Box>
        <Box width="75%" m="auto">
          <Text
            textAlign="center"
            fontWeight={{ base: 400, md: 600 }}
            fontSize={{ base: 20, md: 25 }}
            mt={{ base: 5, md: 35, lg: 50 }}
          >
            Frontend
          </Text>
          <SimpleGrid
            columns={{ base: 2, md: 4, lg: 8 }}
            textAlign="center"
            spacing={10}
            mt={{ base: 5, md: 35, lg: 50 }}
          >
            <Flex
              className="skills-card"
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems="center"
            >
              <Image w="50px" src={htmlSkill} alt="skills" />
              <Button
                className="skills-card-name"
                bg="#f25d1d"
                _hover={{ bg: "#f97840", color: "black" }}
                size={{ base: "sm", md: "md" }}
                rounded={10}
                mt={1}
                color="white"
              >
                HTML
              </Button>
            </Flex>
            <Flex
              className="skills-card"
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems="center"
            >
              <Image w="50px" src={cssSkill} alt="skills" />
              <Button
                className="skills-card-name"
                bg="#1d71f0"
                _hover={{ bg: "#3986f8", color: "black" }}
                size={{ base: "sm", md: "md" }}
                rounded={10}
                mt={1}
                color="white"
              >
                CSS
              </Button>
            </Flex>
            <Flex
              className="skills-card"
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems="center"
            >
              <Image w="50px" src={jsSkill} alt="skills" />
              <Button
                className="skills-card-name"
                bg="#f7d00f"
                _hover={{ bg: "#f0d757", color: "black" }}
                size={{ base: "sm", md: "md" }}
                rounded={10}
                mt={1}
                color="black"
              >
                JavaScript
              </Button>
            </Flex>
            <Flex
              className="skills-card"
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems="center"
            >
              <Image w="50px" src={reactSkill} alt="skills" />
              <Button
                className="skills-card-name"
                bg="#37d9f5"
                _hover={{ bg: "#0fd4f7", color: "black" }}
                size={{ base: "sm", md: "md" }}
                rounded={10}
                mt={1}
                color="white"
              >
                React
              </Button>
            </Flex>
            <Flex
              className="skills-card"
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems="center"
            >
              <Image w="50px" src={reduxSkill} alt="skills" />
              <Button
                className="skills-card-name"
                bg="#650b9c"
                _hover={{ bg: "#9b0bf4", color: "black" }}
                size={{ base: "sm", md: "md" }}
                rounded={10}
                mt={1}
                color="white"
              >
                Redux
              </Button>
            </Flex>
            <Flex
              className="skills-card"
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems="center"
            >
              <Image w="50px" src={chakraSkill} alt="skills" />
              <Button
                className="skills-card-name"
                bg="#3bafad"
                _hover={{ bg: "#3bafad", color: "black" }}
                size={{ base: "sm", md: "md" }}
                rounded={10}
                mt={1}
                color="white"
              >
                Chakra UI
              </Button>
            </Flex>
            <Flex
              className="skills-card"
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems="center"
            >
              <Image w="50px" src={tailwind} alt="skills" />
              <Button
                className="skills-card-name"
                bg="#3bafad"
                _hover={{ bg: "#5ae8e6", color: "black" }}
                size={{ base: "sm", md: "md" }}
                rounded={10}
                mt={1}
                color="white"
              >
                Tailwind
              </Button>
            </Flex>
            <Flex
              className="skills-card"
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems="center"
            >
              <Image w="50px" src={tsSkill} alt="skills" />
              <Button
                className="skills-card-name"
                bg="#007ACC"
                _hover={{ bg: "#0492f1", color: "black" }}
                size={{ base: "sm", md: "md" }}
                rounded={10}
                mt={1}
                color="white"
              >
                TypeScript
              </Button>
            </Flex>
          </SimpleGrid>
        </Box>
        <Box width="75%" m="auto">
          <Text
            textAlign="center"
            fontWeight={{ base: 400, md: 600 }}
            fontSize={{ base: 20, md: 25 }}
            mt={{ base: 5, md: 35, lg: 50 }}
          >
            Backend
          </Text>
          <SimpleGrid
            columns={{ base: 2, sm: 2, md: 4 }}
            textAlign="center"
            spacing={10}
            mt={{ base: 5, md: 35, lg: 50 }}
          >
            <Flex
              className="skills-card"
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems="center"
            >
              <Image w="50px" src={nodejs} alt="nodejs" />
              <Button
                bg="#339933"
                _hover={{ bg: "#18f918", color: "black" }}
                size={{ base: "sm", md: "md" }}
                rounded={10}
                mt={1}
                color="white"
              >
                NodeJs
              </Button>
            </Flex>
            <Flex
              className="skills-card"
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems="center"
            >
              <Image w="50px" src={express} alt="express" />
              <Button
                bg="#262424"
                _hover={{ bg: "#080808", color: "white" }}
                size={{ base: "sm", md: "md" }}
                rounded={10}
                mt={1}
                color="white"
              >
                Express
              </Button>
            </Flex>
            <Flex
              className="skills-card"
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems="center"
            >
              <Image w="50px" src={mongodb} alt="mongodb" />
              <Button
                bg="#13AA52"
                _hover={{ bg: "#08f46a", color: "black" }}
                size={{ base: "sm", md: "md" }}
                rounded={10}
                mt={1}
                color="white"
              >
                MongoDB
              </Button>
            </Flex>
            <Flex
              className="skills-card"
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems="center"
            >
              <Image w="50px" src={mongoose} alt="mongoose" />
              <Button
                bg="#b80505"
                _hover={{ bg: "#720404", color: "white" }}
                size={{ base: "sm", md: "md" }}
                rounded={10}
                mt={5}
                color="white"
              >
                mongoose
              </Button>
            </Flex>
          </SimpleGrid>
        </Box>
        <Box width="75%" m="auto">
          <Text
            textAlign="center"
            fontWeight={{ base: 400, md: 600 }}
            fontSize={{ base: 20, md: 25 }}
            mt={{ base: 5, md: 35, lg: 50 }}
          >
            Others
          </Text>
          <SimpleGrid
            columns={{ base: 2, sm: 2, md: 2 }}
            textAlign="center"
            spacing={10}
            mt={{ base: 5, md: 35, lg: 50 }}
            w={{ base: "100%", md: "50%" }}
            margin={"auto"}
          >
            <Flex
              className="skills-card"
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems="center"
            >
              <Image w="50px" src={git} alt="git" />
              <Button
                bg="#f45c10"
                _hover={{ bg: "#c64809", color: "black" }}
                size={{ base: "sm", md: "md" }}
                rounded={10}
                mt={1}
                color="white"
              >
                Git
              </Button>
            </Flex>
            <Flex
              className="skills-card"
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems="center"
            >
              <Image w="50px" src={postman} alt="postman" />
              <Button
                bg="#f45c10"
                _hover={{ bg: "#c64809", color: "black" }}
                size={{ base: "sm", md: "md" }}
                rounded={10}
                mt={1}
                color="white"
              >
                Postman
              </Button>
            </Flex>
          </SimpleGrid>
        </Box>
      </Box>
    </Element>
  );
}
