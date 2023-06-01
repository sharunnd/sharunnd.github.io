
import { Box, Center, HStack, Icon, IconButton, Link, Text } from "@chakra-ui/react";
import { Element } from "react-scroll";
import { AiFillGithub, AiFillLinkedin, AiOutlineLinkedin, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";


export function Contact(){

    return (
        <Element  name="contactSection" id="contact">
            <Box bg="#1DA1F2" height={500} textAlign={"center"}>
               <Text fontSize={30} fontWeight={700} pt={50}>Contact</Text>
               <Text  id="contact-phone" fontSize={20}>Phone: +91-7356595601</Text>
               <Text id="contact-email" fontSize={20}>Email: sharunnd11@gmail.com</Text>
               <Text id="addres" fontSize={20}>Address: Ernakulam, Kerala</Text>
               <HStack justifyContent={"center"}>
                     <Box borderRadius={6} bg={"#e2e9ed"} boxSize={40} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <Link href="https://github.com/sharunnd"><IconButton border={"none"} bg={"#e2e9ed"} icon={<AiFillGithub />} fontSize={20}/></Link>
                     </Box>
                     <Box borderRadius={6} bg={"#e2e9ed"} boxSize={40} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                         <Link href="https://www.linkedin.com/in/sharun-n-d-8351191b3/"><IconButton border={"none"} fontSize={20} bg={"#e2e9ed"} icon={<AiOutlineLinkedin />} /></Link>
                     </Box>
                </HStack>
               
            </Box>        
        </Element>
    )
}