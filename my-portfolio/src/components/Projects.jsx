import { Box, Button, HStack, Heading, Text, VStack, Image, Link } from "@chakra-ui/react";
import { Element } from "react-scroll";
import bewkoofHomePage from "../images/bewakoof-homepage.png"
import rentomojoHomePage from "../images/rentomojoHomePage.png"
import myntra from "../images/myntra.png"

export function Project(){

    return (
        <Element  name="projectSection" id="projects">
            <Heading color="white">Projects</Heading>
            <Heading ml={50}>Projects</Heading>
            <VStack>

              <Box className="project-card" border="1px solid red" p={30}>
              <HStack w={700}>
               <Box>
                  <Text className="project-title">Bewakoof Clone</Text>
                  <Text className="project-description">Bewakoof is an online fashion and lifestyle E-commerce website</Text>
                  <HStack class="project-tech-stack">
                    <Button>HTML</Button>
                    <Button>CSS</Button>
                    <Button>JavaScript</Button>
                    <Button>React</Button>
                    <Button>Chakra UI</Button>
                    <Button>Axios</Button>
                  </HStack>
               </Box>
               <Box>
                 <Image src={bewkoofHomePage} width={400}  alt='bewakoofWeb' />
               </Box>
               </HStack>
                <HStack>
                    <Button className="project-github-link"><Link href="https://github.com/sharunnd/towering-grade-7940">GitHub</Link></Button>
                    <Button className="project-deployed-link"><Link href="https://wondrous-starship-6605a1.netlify.app/">Deployment</Link></Button>
                </HStack>
                </Box>

                <Box className="project-card" border="1px solid red" p={30}>
                <HStack w={700}>
               <Box>
                  <Text className="project-title">Rentomojo Clone</Text>
                  <Text className="project-description">It is an online rental platform that allows customers to rent furniture, appliances and other household items</Text>
                  <HStack class="project-tech-stack">
                    <Button>HTML</Button>
                    <Button>CSS</Button>
                    <Button>JavaScript</Button>
                  </HStack>
               </Box>
               <Box>
                 <Image src={rentomojoHomePage} width={400}  alt='rentomojoWeb' />
               </Box>
               </HStack>
                <HStack>
                    <Button className="project-github-link"><Link href="https://github.com/sakshi10393/brisk-smash-9621">GitHub</Link></Button>
                    <Button className="project-deployed-link"><Link href="https://joyful-valkyrie-7a303c.netlify.app/">Deployment</Link></Button>
                </HStack>
                </Box>

                <Box className="project-card" border="1px solid red" p={30}>
                <HStack w={700}>
               <Box>
                  <Text className="project-title">Myntra Clone</Text>
                  <Text className="project-description">Myntra is a major Indian fashion e-commerce company headquartered in Bengaluru, India</Text>
                  <HStack class="project-tech-stack">
                    <Button>HTML</Button>
                    <Button>CSS</Button>
                    <Button>JavaScript</Button>
                  </HStack>
               </Box>
               <Box>
                 <Image src={myntra} width={400}  alt='mytntraWeb' />
               </Box>
               </HStack>
                <HStack>
                    <Button className="project-github-link"><Link href="https://github.com/sharunnd/soft-jelly-7030">GitHub</Link></Button>
                    <Button className="project-deployed-link"><Link href="https://cheery-melba-acacca.netlify.app/">Deployment</Link></Button>
                </HStack>
                </Box>

                <Box className="project-card">
                <HStack w={700}>
               <Box>
                  <Text className="project-title"></Text>
                  <Text className="project-description"></Text>
                  <HStack class="project-tech-stack">
                  </HStack>
               </Box>
               </HStack>
                </Box>
            </VStack>
            
        </Element>
    )
}