import { Box, Flex, Text } from "@chakra-ui/react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Container from "./layout/Container";
import IconLink from "./ui/IconLink";
import site from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box as="footer" borderTop="1px solid" borderColor="border.subtle" py={{ base: 12, md: 16 }}>
      <Container>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "flex-start", md: "center" }}
          gap={8}
        >
          <Box>
            <Text fontFamily="heading" fontSize="h4" mb={2} color="text.primary">
              {site.name}
            </Text>
            <Text fontSize="bodySm" color="text.faint" maxW="42ch">
              Full-stack developer focused on fast, accessible interfaces and the details
              that make a product feel considered.
            </Text>
          </Box>

          <Flex gap={7}>
            <IconLink icon={FiGithub} href={site.github} aria-label="GitHub" />
            <IconLink icon={FiLinkedin} href={site.linkedin} aria-label="LinkedIn" />
            <IconLink icon={FiMail} href={`mailto:${site.email}`} aria-label="Email" external={false} />
          </Flex>
        </Flex>

        <Text mt={12} fontFamily="mono" fontSize="caption" color="text.faint">
          © {year} {site.name} · Built with React
        </Text>
      </Container>
    </Box>
  );
}
