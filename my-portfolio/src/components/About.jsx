import { Box, Text, Image, HStack, Heading } from "@chakra-ui/react";
import { Element } from "react-scroll";
import profilePic from "../images/profile-pic.jpg"



export function About(){

    return (
        <Element  name="aboutSection" id="about" className="about section">
            <Heading>About</Heading>
            <HStack bg="gray">
            <Text id="user-detail-intro">A full-stack web developer who's passionate about turning ideas into reality.
                I'm dedicated to delivering high-quality products that are both visually stunning and highly functional.
            </Text>
            <Box borderRadius='10px'>
                <Image src={profilePic}  className="home-img" borderRadius='50%'  boxSize='150px' alt='sharun' />
            </Box>
            </HStack>   
        </Element>
    )
}