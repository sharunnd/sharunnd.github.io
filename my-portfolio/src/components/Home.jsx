import { Box, Text, Image, HStack, baseTheme, Link, IconButton, Center } from "@chakra-ui/react";
import { Element } from "react-scroll";
import profilePic from "../images/profile-pic.jpg"
import { backInOut } from "framer-motion";
import { AiFillGithub, AiFillLinkedin, AiOutlineLinkedin } from "react-icons/ai";


export function Home(){

    return (
        <Element  name="homeSection" id="home">
            {/* <Box  color={"white"}>Home</Box> */}
            <HStack border="1px solid black" height="100vh">
              <Box width="500px" border="1px solid red" ml={300} >
                  <Text fontSize={30} fontWeight={700} color={"#1DA1F2"}>Hi, I'm</Text>
                  <Text id="user-detail-name" fontSize={30} fontWeight={700} color={"#1DA1F2"} lineHeight={0}>Sharun N D</Text>
                  <Text fontSize={30} fontWeight={700} color={"#1DA1F2"}>Full Stack Web Developer</Text>
                  <Text id="user-detail-intro" border="1px solid blue" fontSize={18} color="#444c61" >A full-stack web developer who's passionate about turning ideas into reality.
                       I'm dedicated to delivering high-quality products that are both visually stunning and highly functional.
                  </Text>
                  <HStack>
                     <Box borderRadius={6} bg={"#e2e9ed"} boxSize={40} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <Link href="https://github.com/sharunnd"><IconButton border={"none"} bg={"#e2e9ed"} icon={<AiFillGithub />} fontSize={20}/></Link>
                     </Box>
                     <Box borderRadius={6} bg={"#e2e9ed"} boxSize={40} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                         <Link href="https://www.linkedin.com/in/sharun-n-d-8351191b3/"><IconButton border={"none"} fontSize={20} bg={"#e2e9ed"} icon={<AiOutlineLinkedin />} /></Link>
                     </Box>
                  </HStack>
              </Box>
              <Box borderRadius='10px' border="1px solid blue" >
                   <Image src={profilePic} className="home-img" ml={100} borderRadius='50%'  boxSize='150px' alt='sharun' />
              </Box>
            </HStack>
        </Element>
    )
}