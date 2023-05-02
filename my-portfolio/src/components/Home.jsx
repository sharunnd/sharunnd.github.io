import { Box, Text, Image, HStack } from "@chakra-ui/react";
import { Element } from "react-scroll";
import profilePic from "../images/profile-pic.jpg"


export function Home(){

    return (
        <Element  name="projectSection" id="home">
            <HStack>
            <Box width="500px">
               <Text>I'm</Text>
               <Text id="user-detail-name">Sharun N D</Text>
               <Text>Full Stack Web Developer</Text>
               <Text id="user-detail-intro">A full-stack web developer who's passionate about turning ideas into reality.
                I'm dedicated to delivering high-quality products that are both visually stunning and highly functional.
               </Text>
            </Box>
            <Box borderRadius='10px'>
                <Image src={profilePic} borderRadius='50%'  boxSize='150px' alt='sharun' />
            </Box>
            </HStack>
        </Element>
    )
}