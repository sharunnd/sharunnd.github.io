import { Box, Center, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Element } from "react-scroll";
import htmlSkill from "../images/html.png"
import cssSkill from "../images/css.png"
import reactSkill from "../images/react.png"
import reduxSkill from "../images/redux.png"
import chakraSkill from "../images/chakraui.png"
import jsSkill from "../images/javascript.png"
import tsSkill from "../images/typescript.png"






export function Skills(){

    return (
        <Element  name="skillsSection" id="skills">
            <Heading>Skills</Heading>
            <Box width="75%" m={"auto"}>
               <Text textAlign="center">Frontend</Text>
               <SimpleGrid columns={7} spacing={10} m={"auto"}>
                 <Box w={100} border="1px solid black" className="skills-card">
                    <Image border="1px solid black" width={50} src={htmlSkill} className="skills-card-img" alt="skills"/>
                    <Text border="1px solid black" className="skills-card-name">HTML</Text>
                 </Box>
                 <Box w={50} className="skills-card">
                    <Image width="100%" mb={0} src={cssSkill} className="skills-card-img" alt="skills"/>
                    <Text className="skills-card-name">CSS</Text>
                 </Box>
                 <Box w={100} border="1px solid black" class="skills-card">
                    <Image border="1px solid black" src={jsSkill} className="skills-card-img" width={50} alt="skills"/>
                    <Text className="skills-card-name">JavaScript</Text>
                 </Box>
                 <Box w={50} className="skills-card">
                    <Image src={reactSkill} className="skills-card-img" width="100%" alt="skills"/>
                    <Text className="skills-card-name">React</Text>
                 </Box>
                 <Box w={50} className="skills-card">
                    <Image src={reduxSkill} className="skills-card-img" width="100%" alt="skills"/>
                    <Text className="skills-card-name">Redux</Text>
                 </Box>
                 <Box w={50} className="skills-card">
                    <Image src={chakraSkill} className="skills-card-img" width="100%" alt="skills"/>
                    <Text className="skills-card-name">Chakra UI</Text>
                 </Box>
                 <Box w={50} className="skills-card">
                    <Image src={tsSkill} className="skills-card-img" width="100%" alt="skills"/>
                    <Text className="skills-card-name">TypeScript</Text>
                 </Box>
                </SimpleGrid>
            </Box>
            
        </Element>
    )
}