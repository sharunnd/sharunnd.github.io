
import { Box, Icon, IconButton, Link, Text } from "@chakra-ui/react";
import { Element } from "react-scroll";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";


export function Contact(){

    return (
        <Element  name="contactSection" id="contact">
            <Box bg="gray" height="100vh">
               <Text>Contact</Text>
               <Link href="https://github.com/sharunnd" id="contact-github"><IconButton icon={<AiFillGithub />} /></Link>
               <Link href="https://www.linkedin.com/in/sharun-n-d-8351191b3/"  id="contact-linkedin"><IconButton icon={<AiFillLinkedin />} /></Link>
               <Text  id="contact-phone"><IconButton icon={<AiOutlinePhone />} />+91-7356595601</Text>
               <Text id="contact-email"><IconButton icon={<AiOutlineMail />} />sharunnd11@gmail.com</Text>
            </Box>        
        </Element>
    )
}