import { useEffect, useState } from "react";
import { Box, Grid, Text, Icon, Flex } from "@chakra-ui/react";
import { scroller } from "react-scroll";
import { FiGithub, FiLinkedin, FiArrowDownRight } from "react-icons/fi";
import Section from "./layout/Section";
import MagneticButton from "./ui/MagneticButton";
import IconLink from "./ui/IconLink";
import site from "../data/site";
import profilePic from "../images/profile-pic.png";

const HEADLINE = ["I", "build", "fast,", "considered", "interfaces", "for", "the", "web."];

export function Home() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const goToWork = () =>
    scroller.scrollTo("projectSection", { smooth: true, duration: 600, offset: -72 });

  return (
    <Section
      name="homeSection"
      hasHeader={false}
      aria-label="Introduction"
      py="0"
      minH={{ base: "auto", lg: "100vh" }}
      display="flex"
      alignItems="center"
      pt={{ base: "128px", lg: "72px" }}
      pb={{ base: "96px", lg: "72px" }}
      overflow="hidden"
    >
      <Box
        aria-hidden
        position="absolute"
        inset={0}
        pointerEvents="none"
        sx={{
          background:
            "radial-gradient(60% 55% at 78% 18%, var(--accent-wash), transparent 70%)",
        }}
      />

      <Grid
        className={entered ? "hero-in" : undefined}
        templateColumns={{ base: "1fr", lg: "1.12fr 0.88fr" }}
        gap={{ base: 14, lg: 20 }}
        alignItems="center"
        w="100%"
      >
        <Box>
          <Box
            className="hero-line"
            style={{ "--i": 0 }}
            fontFamily="mono"
            fontSize="eyebrow"
            letterSpacing="0.16em"
            textTransform="uppercase"
            color="accent.solid"
            mb={7}
          >
            {site.role} · {site.base}
          </Box>

          <Box
            as="h1"
            fontSize="display"
            fontWeight={380}
            lineHeight="1.05"
            letterSpacing="-0.02em"
            mb={8}
          >
            {HEADLINE.map((word, i) => (
              <Box
                as="span"
                key={`${word}-${i}`}
                className="hero-line"
                style={{ "--i": i + 1 }}
                display="inline-block"
                mr="0.28em"
                color={word === "web." ? "accent.solid" : "text.primary"}
              >
                {word}
              </Box>
            ))}
          </Box>

          <Box
            className="hero-line"
            style={{ "--i": HEADLINE.length + 1 }}
            fontFamily="mono"
            fontSize="caption"
            color="text.faint"
            letterSpacing="0.04em"
            mb={7}
          >
            React &nbsp;·&nbsp; TypeScript &nbsp;·&nbsp; Design Systems &nbsp;·&nbsp; Performance
          </Box>

          <Text
            className="hero-line"
            style={{ "--i": HEADLINE.length + 2 }}
            fontSize="lead"
            color="text.muted"
            maxW="52ch"
            mb={10}
          >
            A full-stack web developer who's passionate about turning ideas into reality.
            I'm dedicated to delivering high-quality products that are both visually
            stunning and highly functional.
          </Text>

          <Flex
            className="hero-line"
            style={{ "--i": HEADLINE.length + 3 }}
            align="center"
            gap={5}
            wrap="wrap"
          >
            <MagneticButton
              variant="cta"
              onClick={goToWork}
              rightIcon={<Icon as={FiArrowDownRight} boxSize="16px" />}
            >
              View selected work
            </MagneticButton>
            <Flex align="center" gap={6} pl={1}>
              <IconLink icon={FiGithub} href={site.github} aria-label="GitHub">
                GitHub
              </IconLink>
              <IconLink icon={FiLinkedin} href={site.linkedin} aria-label="LinkedIn">
                LinkedIn
              </IconLink>
            </Flex>
          </Flex>
        </Box>

        <Box
          className="hero-line"
          style={{ "--i": HEADLINE.length + 2 }}
          justifySelf={{ base: "start", lg: "center" }}
          position="relative"
          w={{ base: "180px", sm: "220px", lg: "300px" }}
          flexShrink={0}
        >
          <Box
            aria-hidden
            position="absolute"
            inset={0}
            transform="translate(16px, 16px)"
            border="1px solid"
            borderColor="accent.solid"
            borderRadius="lg"
            opacity={0.5}
          />
          <Box
            position="relative"
            borderRadius="lg"
            overflow="hidden"
            border="1px solid"
            borderColor="border.strong"
            boxShadow="lg"
          >
            <Box
              as="img"
              src={profilePic}
              alt="Sharun N D"
              display="block"
              w="100%"
              sx={{ aspectRatio: "4 / 5" }}
              objectFit="cover"
              filter="grayscale(0)"
              transition="filter 500ms var(--ease-out), transform 600ms var(--ease-out)"
              _hover={{ filter: "grayscale(1) contrast(1.02)", transform: "scale(1.03)" }}
            />
          </Box>
        </Box>
      </Grid>
    </Section>
  );
}
