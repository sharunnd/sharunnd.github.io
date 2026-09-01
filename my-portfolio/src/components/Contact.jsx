import { useState } from "react";
import { Box, Flex, Grid, Icon, Link, Text, useClipboard } from "@chakra-ui/react";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiCheck, FiCopy } from "react-icons/fi";
import Section from "./layout/Section";
import SectionHeader from "./layout/SectionHeader";
import Reveal from "./ui/Reveal";
import IconLink from "./ui/IconLink";
import site from "../data/site";

function CopyEmail() {
  const { onCopy, hasCopied } = useClipboard(site.email);
  const [announce, setAnnounce] = useState("");

  const handle = () => {
    onCopy();
    setAnnounce("Email address copied");
  };

  return (
    <Flex align="center" gap={3}>
      <Link
        href={`mailto:${site.email}`}
        fontSize={{ base: "lead", md: "h4" }}
        color="text.primary"
        className="u-link"
        _hover={{ color: "accent.solid" }}
      >
        {site.email}
      </Link>
      <Box
        as="button"
        type="button"
        onClick={handle}
        aria-label={hasCopied ? "Email copied" : "Copy email address"}
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        w={8}
        h={8}
        borderRadius="sm"
        color={hasCopied ? "gold.solid" : "text.faint"}
        border="1px solid"
        borderColor="border.subtle"
        transition="color 160ms var(--ease-soft), border-color 160ms var(--ease-soft)"
        _hover={{ color: "accent.solid", borderColor: "border.strong" }}
      >
        <Icon as={hasCopied ? FiCheck : FiCopy} boxSize="14px" />
      </Box>
      <Box as="span" role="status" aria-live="polite" position="absolute" w="1px" h="1px" overflow="hidden" clipPath="inset(50%)">
        {announce}
      </Box>
    </Flex>
  );
}

function Detail({ icon, label, children }) {
  return (
    <Box mb={8}>
      <Flex
        as="dt"
        align="center"
        gap={3}
        color="text.faint"
        fontFamily="mono"
        fontSize="eyebrow"
        letterSpacing="0.12em"
        textTransform="uppercase"
        mb={3}
      >
        <Icon as={icon} boxSize="15px" /> {label}
      </Flex>
      <Box as="dd" m={0}>
        {children}
      </Box>
    </Box>
  );
}

export function Contact() {
  return (
    <Section name="contactSection" borderTop overflow="hidden">
      <Box
        aria-hidden
        position="absolute"
        inset={0}
        pointerEvents="none"
        sx={{
          background:
            "radial-gradient(50% 60% at 20% 0%, var(--accent-wash), transparent 70%)",
        }}
      />

      <Grid templateColumns={{ base: "1fr", lg: "1.1fr 0.9fr" }} gap={{ base: 4, lg: 20 }}>
        <SectionHeader
          id="contactSection"
          eyebrow="Contact"
          index={7}
          title="Let's build something worth shipping."
          intro="Open to full-stack roles and interesting product work. The fastest way to reach me is email."
          maxW="16ch"
        />

        <Box>
          <Reveal>
            <Box as="dl" m={0}>
              <Detail icon={FiMail} label="Email">
                <CopyEmail />
              </Detail>

              <Detail icon={FiPhone} label="Phone">
                <Link
                  href={`tel:${site.phone.replace(/-/g, "")}`}
                  fontSize={{ base: "lead", md: "h4" }}
                  color="text.primary"
                  className="u-link"
                  _hover={{ color: "accent.solid" }}
                >
                  {site.phone}
                </Link>
              </Detail>

              <Detail icon={FiMapPin} label="Location">
                <Text fontSize={{ base: "lead", md: "h4" }} color="text.primary">
                  {site.location}
                </Text>
              </Detail>
            </Box>
          </Reveal>

          <Reveal index={1}>
            <Flex gap={8} pt={8} borderTop="1px solid" borderColor="border.subtle">
              <IconLink icon={FiGithub} href={site.github} aria-label="GitHub">
                GitHub
              </IconLink>
              <IconLink icon={FiLinkedin} href={site.linkedin} aria-label="LinkedIn">
                LinkedIn
              </IconLink>
            </Flex>
          </Reveal>
        </Box>
      </Grid>
    </Section>
  );
}
