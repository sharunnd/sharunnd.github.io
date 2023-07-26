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
        <Heading as="h1" fontSize={{ base: "xl", md: "3xl", lg: "4xl" }} color="black" mb={{ base: 1, md: 10, lg: 50 }}>
          Projects
        </Heading>
      </Box>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: 10, md: 50, lg: 50 }} px={{ base: 10,sm:50, md: 50, lg: 150 }} pb={{ base: 50, md: 100, lg: 100 }}>
          {/* Project Card 1 */}
          
          <Box
            className="project-card"
            p={10}
            boxShadow='md'
            _hover={{boxShadow:"0px 5px 15px #adaeaf"}}
            rounded='xl'
            bg="white"
          >
            <Box mb={5} transition="transform 5s" _hover={{ transform: "scale(1.2)" }}>
              <Image src={bewkoofHomePage} width={400} alt="bewakoofWeb" />
            </Box>
            <Text className="project-title" fontSize={20} fontWeight={700}>
              Bewakoof Clone
            </Text>
            <Text className="project-description">
              Bewakoof is an online fashion and lifestyle E-commerce website
            </Text>
            <SimpleGrid class="project-tech-stack" columns={{base:2, md:3}} gap={2} mt={5}>
              <Button className="button-style">HTML</Button>
              <Button className="button-style">CSS</Button>
              <Button className="button-style">JavaScript</Button>
              <Button className="button-style">React</Button>
              <Button className="button-style">Chakra UI</Button>
              <Button className="button-style">Axios</Button>
            </SimpleGrid>
            <Flex mt={5} justifyContent={"center"}>
            <Link href="https://github.com/sharunnd/towering-grade-7940" target="_blank" rel="noopener noreferrer" mx={5}>
              <IconButton bg="#e2e9ed" _hover={{bg:"#1DA1F2"}} icon={<AiFillGithub />} fontSize={20} rounded={"50%"}/>
            </Link>
            <Link href="https://wondrous-starship-6605a1.netlify.app/" target="_blank" rel="noopener noreferrer" mx={5}>
              <IconButton bg="#e2e9ed" _hover={{bg:"#1DA1F2"}} icon={<AiFillEye />} fontSize={20} rounded={"50%"}/>
            </Link>
          </Flex>
          </Box>

          {/* Project Card 2 */}
          <Box
            className="project-card"
            p={10}
            boxShadow='md'
            _hover={{boxShadow:"0px 5px 15px #adaeaf"}}
            rounded='xl'
            bg="white"
          >
            <Box mb={5} transition="transform 5s" _hover={{ transform: "scale(1.2)" }}>
              <Image src={myntra} width={400} alt="myntraWeb" />
            </Box>
            <Text className="project-title" fontSize={20} fontWeight={700}>
              Myntra Clone
            </Text>
            <Text className="project-description">
              Myntra is a major Indian fashion e-commerce company headquartered in Bengaluru, India
            </Text>
            <SimpleGrid class="project-tech-stack" columns={3} gap={2} mt={5}>
              <Button className="button-style">HTML</Button>
              <Button className="button-style">CSS</Button>
              <Button className="button-style">JavaScript</Button>
            </SimpleGrid>
            <HStack mt={5}>
              <Button className="project-github-link" {...buttonStyle}>
                <Link
                  href="https://github.com/sharunnd/soft-jelly-7030"
                  color="white"
                  textDecoration="none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Link>
              </Button>
              <Button className="project-deployed-link" {...buttonStyle}>
                <Link
                  href="https://cheery-melba-acacca.netlify.app/"
                  color="white"
                  textDecoration="none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Deployment
                </Link>
              </Button>
            </HStack>
          </Box>

          {/* Project Card 3 */}
          <Box
            className="project-card"
            p={10}
            boxShadow='md'
            _hover={{boxShadow:"0px 5px 15px #adaeaf"}}
            rounded='xl'
            bg="white"
          >
            <Box mb={5} transition="transform 5s" _hover={{ transform: "scale(1.2)" }}>
              <Image src={rentomojoHomePage} width={400} alt="rentomojoWeb" />
            </Box>
            <Text className="project-title" fontSize={20} fontWeight={700}>
              Rentomojo Clone
            </Text>
            <Text className="project-description">
              It is an online rental platform that allows customers to rent furniture, appliances and other household items
            </Text>
            <SimpleGrid class="project-tech-stack" columns={3} gap={2} mt={5}>
              <Button className="button-style">HTML</Button>
              <Button className="button-style">CSS</Button>
              <Button className="button-style">JavaScript</Button>
            </SimpleGrid>
            <HStack mt={5}>
              <Button className="project-github-link" {...buttonStyle}>
                <Link
                  href="https://github.com/sakshi10393/brisk-smash-9621"
                  color="white"
                  textDecoration="none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Link>
              </Button>
              <Button className="project-deployed-link" {...buttonStyle}>
                <Link
                  href="https://joyful-valkyrie-7a303c.netlify.app/"
                  color="white"
                  textDecoration="none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Deployment
                </Link>
              </Button>
            </HStack>
          </Box>
        </SimpleGrid>
      </VStack>
    </Element>
  );
}
