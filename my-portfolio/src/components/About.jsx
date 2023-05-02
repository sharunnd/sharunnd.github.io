import { Box, Text } from "@chakra-ui/react";
import { Element } from "react-scroll";



export function About(){

    return (
        <Element  name="aboutSection" id="about" className="about section">
            <Box bg="gray" height="100vh">
               <Text>Contact</Text>
            </Box>   
        </Element>
    )
}