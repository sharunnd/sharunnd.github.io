import { Box, Button, HStack, Heading, Text, VStack, Image, Link, SimpleGrid } from "@chakra-ui/react";
import { Element } from "react-scroll";
import bewkoofHomePage from "../images/bewakoof-homepage.png"
import rentomojoHomePage from "../images/rentomojoHomePage.png"
import myntra from "../images/myntra.png"

export function Project(){
  const buttonStyle = {
    bg:"#1DA1F2",
     border:"none",
      rounded:"5px" ,
     p:"5px"
  };
    return (
        <Element  name="projectSection" id="projects">
            <Heading color="white">Projects</Heading>
            <Heading ml={50}>Projects</Heading>
            <VStack spacing={25}>

              <Box className="project-card" p={30} boxShadow = "0px 5px 15px #1DA1F2" rounded={5}>
              <HStack w={700}>
               <Box>
                  <Text className="project-title" fontSize={20} fontWeight={700}>Bewakoof Clone</Text>
                  <Text className="project-description">Bewakoof is an online fashion and lifestyle E-commerce website</Text>
                  <SimpleGrid class="project-tech-stack" columns={3} gap={10} >
                    <Button className="button-style">HTML</Button>
                    <Button className="button-style">CSS</Button>
                    <Button className="button-style">JavaScript</Button>
                    <Button className="button-style">React</Button>
                    <Button className="button-style">Chakra UI</Button>
                    <Button className="button-style">Axios</Button>
                  </SimpleGrid>
               </Box>
               <Box transition="transform 5s" _hover={{ transform: "scale(1.2)"}}>
                 <Image src={bewkoofHomePage} width={400}  alt='bewakoofWeb' />
               </Box>
               </HStack>
                <HStack mt={10}>
                    <Button className="project-github-link" bg="black" border="none" p={5} rounded={5}><Link href="https://github.com/sharunnd/towering-grade-7940" color={"white"} textDecoration="none">GitHub</Link></Button>
                    <Button className="project-deployed-link" bg="black" border="none" p={5} rounded={5}><Link href="https://wondrous-starship-6605a1.netlify.app/" color={"white"} textDecoration="none">Deployment</Link></Button>
                </HStack>
                </Box>

                <Box className="project-card" p={30} boxShadow = "0px 5px 15px #1DA1F2" rounded={5}>
                <HStack w={700}>
               <Box>
                  <Text className="project-title">Rentomojo Clone</Text>
                  <Text className="project-description">It is an online rental platform that allows customers to rent furniture, appliances and other household items</Text>
                  <SimpleGrid class="project-tech-stack" columns={3} gap={10}>
                    <Button className="button-style">HTML</Button>
                    <Button className="button-style">CSS</Button>
                    <Button className="button-style">JavaScript</Button>
                  </SimpleGrid>
               </Box>
               <Box transition="transform 5s" _hover={{ transform: "scale(1.2)"}}>
                 <Image src={rentomojoHomePage} width={400}  alt='rentomojoWeb' />
               </Box>
               </HStack>
                <HStack>
                    <Button className="project-github-link" bg="black" border="none" p={5} rounded={5}><Link href="https://github.com/sakshi10393/brisk-smash-9621" color={"white"} textDecoration="none">GitHub</Link></Button>
                    <Button className="project-deployed-link" bg="black" border="none" p={5} rounded={5}><Link href="https://joyful-valkyrie-7a303c.netlify.app/" color={"white"} textDecoration="none">Deployment</Link></Button>
                </HStack>
                </Box>

                <Box className="project-card" p={30} boxShadow = "0px 5px 15px #1DA1F2" rounded={5}>
                <HStack w={700}>
               <Box>
                  <Text className="project-title">Myntra Clone</Text>
                  <Text className="project-description">Myntra is a major Indian fashion e-commerce company headquartered in Bengaluru, India</Text>
                  <SimpleGrid class="project-tech-stack" columns={3} gap={10}>
                    <Button className="button-style">HTML</Button>
                    <Button className="button-style">CSS</Button>
                    <Button className="button-style">JavaScript</Button>
                  </SimpleGrid>
               </Box>
               <Box transition="transform 5s" _hover={{ transform: "scale(1.2)"}}>
                 <Image src={myntra} width={400}  alt='mytntraWeb' />
               </Box>
               </HStack>
                <HStack>
                    <Button className="project-github-link" bg="black" border="none" p={5} rounded={5}><Link href="https://github.com/sharunnd/soft-jelly-7030" color={"white"} textDecoration="none">GitHub</Link></Button>
                    <Button className="project-deployed-link" bg="black" border="none" p={5} rounded={5}><Link href="https://cheery-melba-acacca.netlify.app/" color={"white"} textDecoration="none">Deployment</Link></Button>
                </HStack>
                </Box>

                <Box className="project-card" p={30} boxShadow = "0px 5px 15px #1DA1F2" rounded={5}>
                <HStack w={700}>
               <Box>
                  <Text className="project-title">Myntra Clone</Text>
                  <Text className="project-description">Myntra is a major Indian fashion e-commerce company headquartered in Bengaluru, India</Text>
                  <SimpleGrid class="project-tech-stack" columns={3} gap={10}>
                    <Button className="button-style">HTML</Button>
                    <Button className="button-style">CSS</Button>
                    <Button className="button-style">JavaScript</Button>
                  </SimpleGrid>
               </Box>
               <Box transition="transform 5s" _hover={{ transform: "scale(1.2)"}}>
                 <Image src={myntra} width={400}  alt='mytntraWeb' />
               </Box>
               </HStack>
                <HStack>
                    <Button className="project-github-link" bg="black" border="none" p={5} rounded={5}><Link href="https://github.com/sharunnd/soft-jelly-7030" color={"white"} textDecoration="none">GitHub</Link></Button>
                    <Button className="project-deployed-link" bg="black" border="none" p={5} rounded={5}><Link href="https://cheery-melba-acacca.netlify.app/" color={"white"} textDecoration="none">Deployment</Link></Button>
                </HStack>
                </Box>
            </VStack>
            
        </Element>
    )
}