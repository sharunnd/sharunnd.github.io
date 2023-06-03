import { Box, Center, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Element } from "react-scroll";
import htmlSkill from "../images/html.png"
import cssSkill from "../images/css.png"
import reactSkill from "../images/react.png"
import reduxSkill from "../images/redux.png"
import chakraSkill from "../images/chakraui.png"
import jsSkill from "../images/javascript.png"
import tsSkill from "../images/typescript.png"
import nodejs from "../images/nodejs.png"
import express from "../images/express.png"
import mongodb from "../images/mongodb.png"





export function Skills(){

    return (
        <Element  name="skillsSection" id="skills">
            <Heading color={"white"}>Skills</Heading>

            <Heading ml={50}>Skills</Heading>
            <Box>
            <Box width="75%" m={"auto"}>
               <Text textAlign="center" fontSize={25} mt={50}>Frontend</Text>
               <SimpleGrid columns={7} textAlign={"center"}>
                 <Box w={100} className="skills-card">
                    <Image width={50} src={htmlSkill} className="skills-card-img" alt="skills"/>
                    <Text className="skills-card-name" bg="#f25d1d" rounded={5} p={3} color="white">HTML</Text>
                 </Box>
                 <Box w={100} className="skills-card">
                    <Image width={50} src={cssSkill} className="skills-card-img" alt="skills"/>
                    <Text className="skills-card-name" bg="#1d71f0" rounded={5} p={3} color="white">CSS</Text>
                 </Box>
                 <Box w={100} class="skills-card">
                    <Image src={jsSkill} className="skills-card-img" width={50} alt="skills"/>
                    <Text className="skills-card-name" bg="#f7d00f" rounded={5} p={3} color="black">JavaScript</Text>
                 </Box>
                 <Box w={100} className="skills-card">
                    <Image src={reactSkill} className="skills-card-img" width={50} alt="skills"/>
                    <Text className="skills-card-name" bg="#0fd4f7" rounded={5} p={3} color="white">React</Text>
                 </Box>
                 <Box w={100} className="skills-card">
                    <Image src={reduxSkill} className="skills-card-img" width={50} alt="skills"/>
                    <Text className="skills-card-name" bg="#650b9c" rounded={5} p={3} color="white">Redux</Text>
                 </Box>
                 <Box w={100} className="skills-card">
                    <Image src={chakraSkill} className="skills-card-img" width={50} alt="skills"/>
                    <Text className="skills-card-name" bg="#3bafad" rounded={5} p={3} color="white">Chakra UI</Text>
                 </Box>
                 <Box w={100} className="skills-card">
                    <Image src={tsSkill} className="skills-card-img" width={50} alt="skills"/>
                    <Text className="skills-card-name" bg="#007ACC" rounded={5} p={3} color="white">TypeScript</Text>
                 </Box>
                </SimpleGrid>
            </Box>
               <Box w={500} m={"auto"}>
                <Text textAlign="center" fontSize={25} mt={50}>Backend</Text>

                <SimpleGrid columns={3} textAlign={"center"}>
                 <Box w={100} m={"auto"}>
                    <Image width={50} src={nodejs} alt="nodejs"/>
                    <Text bg="#339933" rounded={5} p={3} color="white">NodeJs</Text>
                 </Box>
                 <Box w={100} m={"auto"}>
                    <Image width={50} src={express} alt="express"/>
                    <Text bg="#262424" rounded={5} p={3} color="white">Express</Text>
                 </Box>
                 <Box w={100} m={"auto"}>
                    <Image width={50} src={mongodb} alt="mongodb"/>
                    <Text bg="#13AA52" rounded={5} p={3} color="white">MongoDB</Text>
                 </Box>
                </SimpleGrid>
                </Box>
            </Box>
            
        </Element>
    )
}