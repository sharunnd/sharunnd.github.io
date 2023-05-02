import { Box, Text } from "@chakra-ui/react";
import { Element } from "react-scroll";



export function Project(){

    return (
        <Element  name="projectSection" id="projects">
            <Box bg="red" height="100vh">
               <Text>Projects</Text>
            </Box>
            
        </Element>
    )
}