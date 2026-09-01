import { Box, Flex, Text, Wrap, WrapItem } from "@chakra-ui/react";
import Section from "./layout/Section";
import SectionHeader from "./layout/SectionHeader";
import Reveal from "./ui/Reveal";
import TechBadge from "./ui/TechBadge";
import experience from "../data/experience";

export function Experience() {
  return (
    <Section name="experienceSection" borderTop>
      <SectionHeader
        id="experienceSection"
        eyebrow="Experience"
        index={2}
        title="Where I've been building."
        intro="Two engineering roles across product-focused teams — from performance work on a data platform to architecture and AI features in healthcare."
      />

      <Box
        position="relative"
        maxW="var(--container-max)"
        pl={{ base: 6, md: 8 }}
        _before={{
          content: '""',
          position: "absolute",
          left: 0,
          top: "6px",
          bottom: "6px",
          width: "1px",
          bg: "border.strong",
        }}
      >
        {experience.map((job, i) => (
          <Reveal
            key={job.company}
            index={i}
            position="relative"
            pb={i === experience.length - 1 ? 0 : { base: 12, md: 16 }}
          >
            {/* node */}
            <Box
              aria-hidden
              position="absolute"
              left={{ base: "-24px", md: "-32px" }}
              top="6px"
              w="9px"
              h="9px"
              borderRadius="full"
              bg={job.current ? "gold.solid" : "bg.canvas"}
              border="1px solid"
              borderColor={job.current ? "gold.solid" : "border.strong"}
              transform="translateX(-50%)"
              boxShadow={job.current ? "0 0 0 4px var(--accent-wash)" : "none"}
            />

            <Text
              fontFamily="mono"
              fontSize="eyebrow"
              letterSpacing="0.08em"
              color="text.faint"
              mb={2}
            >
              {job.period}
            </Text>

            <Flex align="baseline" wrap="wrap" gap={2} mb={4}>
              <Text as="h3" fontSize="h4" fontWeight={600} color="text.primary">
                {job.role}
              </Text>
              <Text fontSize="h4" color="text.faint">
                ·
              </Text>
              <Text fontSize="h4" color="accent.solid">
                {job.company}
              </Text>
              <Text fontSize="bodySm" color="text.faint">
                {job.location}
              </Text>
            </Flex>

            <Box as="ul" listStyleType="none" m={0} p={0} maxW="var(--measure)" mb={5}>
              {job.points.map((point, j) => (
                <Box as="li" key={j} display="flex" gap={3} mt={j === 0 ? 0 : 3}>
                  <Box as="span" mt="11px" flexShrink={0} w={3} h="1px" bg="border.strong" />
                  <Text fontSize="bodySm" color="text.muted">
                    {point}
                  </Text>
                </Box>
              ))}
            </Box>

            <Wrap spacing={2}>
              {job.stack.map((tech) => (
                <WrapItem key={tech}>
                  <TechBadge>{tech}</TechBadge>
                </WrapItem>
              ))}
            </Wrap>
          </Reveal>
        ))}
      </Box>
    </Section>
  );
}
