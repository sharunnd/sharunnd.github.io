import { SimpleGrid, Text, Wrap, WrapItem } from "@chakra-ui/react";
import Section from "./layout/Section";
import SectionHeader from "./layout/SectionHeader";
import Reveal from "./ui/Reveal";
import TechBadge from "./ui/TechBadge";
import capabilities from "../data/skills";

export function Skills() {
  return (
    <Section name="skillsSection" borderTop>
      <SectionHeader
        id="skillsSection"
        eyebrow="Capabilities"
        index={3}
        title="What the work involves."
        intro="Beyond a list of tools — the areas I take ownership of on a product team."
      />

      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={{ base: 4, md: 5 }}>
        {capabilities.map((cap, i) => (
          <Reveal
            key={cap.title}
            index={i % 3}
            h="100%"
            display="flex"
            flexDirection="column"
            p={{ base: 6, md: 8 }}
            bg="bg.card"
            border="1px solid"
            borderColor="border.subtle"
            borderRadius="md"
            boxShadow="topHighlight"
            transition="border-color 220ms var(--ease-soft), background 220ms var(--ease-soft), transform 220ms var(--ease-soft)"
            _hover={{ borderColor: "border.strong", bg: "bg.cardHover", transform: "translateY(-4px)" }}
          >
            <Text fontFamily="mono" fontSize="eyebrow" color="accent.solid" mb={4}>
              {String(i + 1).padStart(2, "0")}
            </Text>
            <Text as="h3" fontSize="h4" fontWeight={600} mb={3} color="text.primary">
              {cap.title}
            </Text>
            <Text fontSize="bodySm" color="text.muted" mb={6}>
              {cap.blurb}
            </Text>
            <Wrap spacing={2} mt="auto">
              {cap.tags.map((tag) => (
                <WrapItem key={tag}>
                  <TechBadge>{tag}</TechBadge>
                </WrapItem>
              ))}
            </Wrap>
          </Reveal>
        ))}
      </SimpleGrid>
    </Section>
  );
}
