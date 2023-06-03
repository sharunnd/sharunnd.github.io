import { Box, Text, Image, HStack, Heading, Button, Spacer, SimpleGrid } from "@chakra-ui/react";
import { Element } from "react-scroll";
import "../App.css"
import { handleResume } from "../resume";
import { AiOutlineDownload } from "react-icons/ai";

export function About(){
    
    return (
        <Element  name="aboutSection" id="about" className="about section">
            <Heading color={"white"}>About</Heading>
            <Heading ml={50}>About</Heading>
   
            <Box w="60%" margin={"auto"} bg="#e2e9ed" p='30' rounded={10}>
            <Text id="user-detail-intro">A passionate full-stack web developer with expertise in React, NodeJs and a strong
             background in building scalable and high-performance web applications.
            </Text>
            <Text>
              I hold a BTech degree in Instrumentation and Control Engineering, 
              equipping me with a strong foundation in engineering principles and problem-solving.
            </Text>
            <Text>
              I am enthusiastic about joining a team that fosters continuous learning and allowing me to expand my skills and knowledge.
            </Text>
            </Box>
           
            <Box mt={20} textAlign="center" >
               <Button id="resume-button-2" onClick={() => handleResume()} fontSize={15} color="white" border="none" p={10} rounded={5} bg="#1DA1F2"> Resume <AiOutlineDownload /></Button>
            </Box>
        </Element>
    )
}