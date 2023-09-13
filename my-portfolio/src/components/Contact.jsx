import {
  Box,
  Center,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  Text,
} from "@chakra-ui/react";
import { Element } from "react-scroll";
import { AiFillGithub, AiOutlineLinkedin, AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";

export function Contact() {
  return (
    <Element name="contactSection" id="contact">
      <Box
        bg="#1DA1F2"
        height={{ base: 300, md: 300, lg: 500 }}
        textAlign="center"
      >
        <Text
          as="h1"
          fontSize={{ base: "xl", md: "3xl", lg: "4xl" }}
          color="black"
          mb={{ base: 5, md: 10, lg: 50 }}
          fontWeight={700}
          pt={50}
        >
          Contact
        </Text>
        <Flex
          gap={3}
          id="contact-email"
          fontSize={{ base: 18, md: 20 }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <IconButton
            fontSize={20}
            _hover={{ bg: "#1DA1F2", color: "black" }}
            rounded={"50%"}
            icon={<HiOutlineMail />}
            bg={"none"}
            color={"white"}
          />
          <Text>sharunnd11@gmail.com</Text>
        </Flex>
        <Flex
          gap={3}
          id="contact-phone"
          fontSize={{ base: 18, md: 20 }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <IconButton
            fontSize={20}
            _hover={{ bg: "#1DA1F2", color: "black" }}
            rounded={"50%"}
            icon={<AiOutlinePhone />}
            bg={"none"}
            color={"white"}
          />
          <Text>+91-7356595601</Text>
        </Flex>
        <Flex
          gap={3}
          id="addres"
          fontSize={{ base: 18, md: 20 }}
          justifyContent={"center"}
          alignItems={"center"}
          mb={3}
        >
          <IconButton
            fontSize={20}
            _hover={{ bg: "#1DA1F2", color: "black" }}
            rounded={"50%"}
            icon={<IoLocationOutline />}
            bg={"none"}
            color={"white"}
          />
          <Text id="addres">Ernakulam, Kerala</Text>
        </Flex>
        <Flex gap={5} justifyContent={"center"}>
          <Link
            href="https://github.com/sharunnd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              bg="#EDF2F7"
              _hover={{ bg: "#1DA1F2", color: "white" }}
              icon={<AiFillGithub />}
              fontSize={20}
              rounded={"50%"}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/sharun-n-d-8351191b3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              bg="#EDF2F7"
              _hover={{ bg: "#1DA1F2", color: "white" }}
              icon={<AiOutlineLinkedin />}
              fontSize={20}
              rounded={"50%"}
            />
          </Link>
        </Flex>
      </Box>
    </Element>
  );
}
