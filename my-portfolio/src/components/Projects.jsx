import {
  Box,
  Button,
  HStack,
  Heading,
  Text,
  VStack,
  Image,
  Link,
  SimpleGrid,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { Element } from "react-scroll";
import bewkoofHomePage from "../images/bewakoof-homepage.png";
import rentomojoHomePage from "../images/rentomojoHomePage.png";
import myntra from "../images/myntra.png";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import buycar from "../images/buycar.png"
import petconnects from "../images/petconnects.png"
import innov8X from "../images/innov8x.png"

export function Project() {
  const buttonStyle = {
    bg: "#1DA1F2",
    border: "none",
    rounded: "5px",
    p: "5px",
  };

  return (
    <Element name="projectSection" id="projects">
      <VStack spacing={25} align="center">
        <Box textAlign="center" mb={{ base: 8, md: 0 }}>
          {/* Heading with responsive font sizes */}
          <Heading as="h1" size="xl" color="#EDF2F7" mb={2}>
            Projects
          </Heading>
          <Heading
            as="h1"
            fontSize={{ base: "xl", md: "3xl", lg: "4xl" }}
            color="black"
            mb={{ base: 1, md: 10, lg: 50 }}
          >
            Projects
          </Heading>
        </Box>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={{ base: 10, md: 50, lg: 50 }}
          px={{ base: 10, sm: 50, md: 50, lg: 150 }}
          pb={{ base: 50, md: 100, lg: 100 }}
        >
          {/* Project Card 1 */}

          <Box
            className="project-card"
            p={10}
            boxShadow="md"
            _hover={{ boxShadow: "0px 5px 15px #adaeaf" }}
            rounded="xl"
            bg="white"
          >
            <Box
              mb={5}
              transition="transform 5s"
              _hover={{ transform: "scale(1.2)" }}
            >
              <Image src={bewkoofHomePage} width={400} alt="" />
            </Box>
            <Text className="project-title" fontSize={20} fontWeight={700}>
              Bewakoof Clone
            </Text>
            <Text className="project-description" mt={2}>
              Bewakoof is an online fashion and lifestyle E-commerce website
            </Text>
            <Box mt={2}>
              <Text color={"#1DA1F2"} display= "inline" fontWeight={500}>
                Tech stack:
              </Text>
              <Text display= "inline" ml={1} >
                HTML, CSS, JavaScript, React, Chackra UI
              </Text>
            </Box>
            <Flex mt={5} justifyContent={"center"}>
              <Link
                href="https://github.com/sharunnd/towering-grade-7940"
                target="_blank"
                rel="noopener noreferrer"
                mx={5}
              >
                <IconButton
                  bg="#e2e9ed"
                  _hover={{ bg: "#1DA1F2" }}
                  icon={<AiFillGithub />}
                  fontSize={20}
                  rounded={"50%"}
                />
              </Link>
              <Link
                href="https://wondrous-starship-6605a1.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                mx={5}
              >
                <IconButton
                  bg="#e2e9ed"
                  _hover={{ bg: "#1DA1F2" }}
                  icon={<AiFillEye />}
                  fontSize={20}
                  rounded={"50%"}
                />
              </Link>
            </Flex>
          </Box>

          <Box
            className="project-card"
            p={10}
            boxShadow="md"
            _hover={{ boxShadow: "0px 5px 15px #adaeaf" }}
            rounded="xl"
            bg="white"
          >
            <Box
              mb={5}
              transition="transform 5s"
              _hover={{ transform: "scale(1.2)" }}
            >
              <Image src={buycar} width={400} alt="buycar" />
            </Box>
            <Text className="project-title" fontSize={20} fontWeight={700}>
              BuyCars
            </Text>
            <Text className="project-description" mt={2}>
              BUYC Corp is a marketplace for second-hand cars.
            </Text>
            <Box mt={2}>
              <Text color={"#1DA1F2"} display= "inline" fontWeight={500}>
                Tech stack:
              </Text>
              <Text display= "inline" ml={1} >
                HTML, CSS, JavaScript, React, Chackra UI, Node.js, Express, MongoDB
              </Text>
            </Box>
            {/* HTML,CSS,JavaScript,React,Chackra UI,Node.js,Express,MongoDB */}
            <Flex mt={5} justifyContent={"center"}>
              <Link
                href="https://github.com/sharunnd/BUYC_Corp"
                target="_blank"
                rel="noopener noreferrer"
                mx={5}
              >
                <IconButton
                  bg="#e2e9ed"
                  _hover={{ bg: "#1DA1F2" }}
                  icon={<AiFillGithub />}
                  fontSize={20}
                  rounded={"50%"}
                />
              </Link>
              <Link
                href="https://buycars-ten.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                mx={5}
              >
                <IconButton
                  bg="#e2e9ed"
                  _hover={{ bg: "#1DA1F2" }}
                  icon={<AiFillEye />}
                  fontSize={20}
                  rounded={"50%"}
                />
              </Link>
            </Flex>
          </Box>

          <Box
            className="project-card"
            p={10}
            boxShadow="md"
            _hover={{ boxShadow: "0px 5px 15px #adaeaf" }}
            rounded="xl"
            bg="white"
          >
            <Box
              mb={5}
              transition="transform 5s"
              _hover={{ transform: "scale(1.2)" }}
            >
              <Image src={petconnects} width={400} alt="buycar" />
            </Box>
            <Text className="project-title" fontSize={20} fontWeight={700}>
              Petconnects
            </Text>
            <Text className="project-description" mt={2}>
            PetConnects allows users to adopt pets and send them to shelters
            </Text>
            <Box mt={2}>
              <Text color={"#1DA1F2"} display= "inline" fontWeight={500}>
                Tech stack:
              </Text>
              <Text display= "inline" ml={1} >
                HTML, CSS, JavaScript, React, Chackra UI, Node.js, Express, MongoDB
              </Text>
            </Box>
            {/* HTML,CSS,JavaScript,React,Chackra UI,Node.js,Express,MongoDB */}
            <Flex mt={5} justifyContent={"center"}>
              <Link
                href="https://github.com/lokendra0905/loud-weight-1875"
                target="_blank"
                rel="noopener noreferrer"
                mx={5}
              >
                <IconButton
                  bg="#e2e9ed"
                  _hover={{ bg: "#1DA1F2" }}
                  icon={<AiFillGithub />}
                  fontSize={20}
                  rounded={"50%"}
                />
              </Link>
              <Link
                href="https://petconnects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                mx={5}
              >
                <IconButton
                  bg="#e2e9ed"
                  _hover={{ bg: "#1DA1F2" }}
                  icon={<AiFillEye />}
                  fontSize={20}
                  rounded={"50%"}
                />
              </Link>
            </Flex>
          </Box>

          <Box
            className="project-card"
            p={10}
            boxShadow="md"
            _hover={{ boxShadow: "0px 5px 15px #adaeaf" }}
            rounded="xl"
            bg="white"
          >
            <Box
              mb={5}
              transition="transform 5s"
              _hover={{ transform: "scale(1.2)" }}
            >
              <Image src={innov8X} width={400} alt="innov8x" />
            </Box>
            <Text className="project-title" fontSize={20} fontWeight={700}>
              Innov8X
            </Text>
            <Text className="project-description" mt={2}>
              It is an online GPT-bot for interview preparation
            </Text>
            <Box mt={2}>
              <Text color={"#1DA1F2"} display= "inline" fontWeight={500}>
                Tech stack:
              </Text>
              <Text display= "inline" ml={1} >
                HTML, CSS, JavaScript, React, Tailwind CSS, Node.js, Express, MongoDB
              </Text>
            </Box>
            <Flex mt={5} justifyContent={"center"}>
              <Link
                href="https://github.com/sharunnd/Innov8X"
                target="_blank"
                rel="noopener noreferrer"
                mx={5}
              >
                <IconButton
                  bg="#e2e9ed"
                  _hover={{ bg: "#1DA1F2" }}
                  icon={<AiFillGithub />}
                  fontSize={20}
                  rounded={"50%"}
                />
              </Link>
              <Link
                href="https://candid-kataifi-19e62b.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                mx={5}
              >
                <IconButton
                  bg="#e2e9ed"
                  _hover={{ bg: "#1DA1F2" }}
                  icon={<AiFillEye />}
                  fontSize={20}
                  rounded={"50%"}
                />
              </Link>
            </Flex>
          </Box>

          <Box
            className="project-card"
            p={10}
            boxShadow="md"
            _hover={{ boxShadow: "0px 5px 15px #adaeaf" }}
            rounded="xl"
            bg="white"
          >
            <Box
              mb={5}
              transition="transform 5s"
              _hover={{ transform: "scale(1.2)" }}
            >
              <Image src={myntra} width={400} alt="myntra" />
            </Box>
            <Text className="project-title" fontSize={20} fontWeight={700}>
              Myntra Clone
            </Text>
            <Text className="project-description" mt={2}>
              Myntra is a major Indian fashion e-commerce company headquartered
              in Bengaluru, India
            </Text>
            <Box mt={2}>
              <Text color={"#1DA1F2"} display= "inline" fontWeight={500}>
                Tech stack:
              </Text>
              <Text display= "inline" ml={1} >
                HTML, CSS, JavaScript
              </Text>
            </Box>
            <Flex mt={5} justifyContent={"center"}>
              <Link
                href="https://github.com/sharunnd/soft-jelly-7030"
                target="_blank"
                rel="noopener noreferrer"
                mx={5}
              >
                <IconButton
                  bg="#e2e9ed"
                  _hover={{ bg: "#1DA1F2" }}
                  icon={<AiFillGithub />}
                  fontSize={20}
                  rounded={"50%"}
                />
              </Link>
              <Link
                href="https://cheery-melba-acacca.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                mx={5}
              >
                <IconButton
                  bg="#e2e9ed"
                  _hover={{ bg: "#1DA1F2" }}
                  icon={<AiFillEye />}
                  fontSize={20}
                  rounded={"50%"}
                />
              </Link>
            </Flex>
          </Box>
          
          <Box
            className="project-card"
            p={10}
            boxShadow="md"
            _hover={{ boxShadow: "0px 5px 15px #adaeaf" }}
            rounded="xl"
            bg="white"
          >
            <Box
              mb={5}
              transition="transform 5s"
              _hover={{ transform: "scale(1.2)" }}
            >
              <Image src={rentomojoHomePage} width={400} alt="buycar" />
            </Box>
            <Text className="project-title" fontSize={20} fontWeight={700}>
              Rentomojo Clone
            </Text>
            <Text className="project-description" mt={2}>
              It is an online rental platform that allows customers to rent
              furniture, appliances and other household items
            </Text>
            <Box mt={2}>
              <Text color={"#1DA1F2"} display= "inline" fontWeight={500}>
                Tech stack:
              </Text>
              <Text display= "inline" ml={1} >
                HTML, CSS, JavaScript
              </Text>
            </Box>
            {/* HTML,CSS,JavaScript,React,Chackra UI,Node.js,Express,MongoDB */}
            <Flex mt={5} justifyContent={"center"}>
              <Link
                href="https://github.com/sakshi10393/brisk-smash-9621"
                target="_blank"
                rel="noopener noreferrer"
                mx={5}
              >
                <IconButton
                  bg="#e2e9ed"
                  _hover={{ bg: "#1DA1F2" }}
                  icon={<AiFillGithub />}
                  fontSize={20}
                  rounded={"50%"}
                />
              </Link>
              <Link
                href="https://joyful-valkyrie-7a303c.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                mx={5}
              >
                <IconButton
                  bg="#e2e9ed"
                  _hover={{ bg: "#1DA1F2" }}
                  icon={<AiFillEye />}
                  fontSize={20}
                  rounded={"50%"}
                />
              </Link>
            </Flex>
          </Box>
        
        </SimpleGrid>
      </VStack>
    </Element>
  );
}
