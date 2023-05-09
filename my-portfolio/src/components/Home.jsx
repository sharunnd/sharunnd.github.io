import { Box, Text, Image, HStack } from "@chakra-ui/react";
import { Element } from "react-scroll";


export function Home(){

    return (
        <Element  name="projectSection" id="home">
            <HStack>
            <Box width="500px">
               <Text>I'm</Text>
               <Text id="user-detail-name">Sharun N D</Text>
               <Text>Full Stack Web Developer</Text>
            </Box>
            
            </HStack>
        </Element>
    )
}