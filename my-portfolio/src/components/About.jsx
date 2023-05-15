import { Box, Text, Image, HStack, Heading, Button } from "@chakra-ui/react";
import { Element } from "react-scroll";

import { handleResume } from "../resume";

export function About(){
    
    return (
        <Element  name="aboutSection" id="about" className="about section">
            <Heading>About</Heading>
            <HStack bg="gray">
            <Text id="user-detail-intro">A full-stack web developer who's passionate about turning ideas into reality.
                I'm dedicated to delivering high-quality products that are both visually stunning and highly functional.
            </Text>
            </HStack>
          <Button className="nav-link resume" id="resume-button-2" onClick={()=>handleResume()}>Resume</Button>

        </Element>
    )
}