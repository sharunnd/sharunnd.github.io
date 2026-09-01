import { Box, Grid, Icon, Text } from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import Section from "./layout/Section";
import SectionHeader from "./layout/SectionHeader";
import Reveal from "./ui/Reveal";
import MagneticButton from "./ui/MagneticButton";
import { handleResume } from "../resume";
import aboutImg from "../images/aboutImg.jpg";

const POINTS = [
  "A passionate full-stack web developer with expertise in HTML, CSS, JavaScript, React, Node.js, and a strong background in building scalable and high-performance web applications.",
  "I hold a B.Tech degree in Instrumentation and Control Engineering, equipping me with a strong foundation in engineering principles and problem-solving.",
  "I am enthusiastic about joining a team that fosters continuous learning and allowing me to expand my skills and knowledge.",
];

export function About() {
  return (
    <Section name="aboutSection" borderTop>
      <Grid templateColumns={{ base: "1fr", md: "0.9fr 1.1fr" }} gap={{ base: 12, md: 20 }}>
        <Box display={{ base: "none", md: "block" }}>
          <Reveal>
            <Box position="relative" maxW="360px">
              <Box
                aria-hidden
                position="absolute"
                inset={0}
                transform="translate(-14px, 14px)"
                border="1px solid"
                borderColor="border.strong"
                borderRadius="lg"
              />
              <Box
                as="img"
                src={aboutImg}
                alt="Portrait of Sharun N D"
                position="relative"
                w="100%"
                borderRadius="lg"
                border="1px solid"
                borderColor="border.subtle"
                sx={{ aspectRatio: "1 / 1" }}
                objectFit="cover"
                filter="grayscale(0)"
                transition="filter 500ms var(--ease-out)"
                _hover={{ filter: "grayscale(1)" }}
              />
            </Box>
          </Reveal>
        </Box>

        <Box>
          <SectionHeader
            id="aboutSection"
            eyebrow="About"
            index={1}
            title="A full-stack developer with an engineering foundation."
            maxW="24ch"
          />

          <Box as="ul" listStyleType="none" m={0} p={0} maxW="var(--measure)">
            {POINTS.map((point, i) => (
              <Reveal as="li" key={i} index={i} display="flex" gap={4} mt={i === 0 ? 0 : 7}>
                <Box as="span" mt="12px" flexShrink={0} w={6} h="1px" bg="accent.solid" />
                <Text fontSize="body" color="text.muted">
                  {point}
                </Text>
              </Reveal>
            ))}
          </Box>

          <Reveal index={3}>
            <Box mt={12}>
              <MagneticButton
                variant="line"
                onClick={handleResume}
                rightIcon={<Icon as={FiArrowUpRight} boxSize="15px" />}
              >
                Download résumé
              </MagneticButton>
            </Box>
          </Reveal>
        </Box>
      </Grid>
    </Section>
  );
}
