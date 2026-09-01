import { Box, Grid, Text, Wrap, WrapItem } from "@chakra-ui/react";
import Section from "./layout/Section";
import SectionHeader from "./layout/SectionHeader";
import Reveal from "./ui/Reveal";
import techStack from "../data/techStack";

export function TechStack() {
  return (
    <Section name="techStackSection" borderTop>
      <SectionHeader
        id="techStackSection"
        eyebrow="Tech Stack"
        index={5}
        title="Tools I reach for."
      />

      <Box>
        {techStack.map((group, i) => (
          <Reveal
            key={group.group}
            index={i}
            py={{ base: 7, md: 9 }}
            borderTop="1px solid"
            borderColor="border.subtle"
            _last={{ borderBottom: "1px solid", borderColor: "border.subtle" }}
          >
            <Grid templateColumns={{ base: "1fr", md: "220px 1fr" }} gap={{ base: 5, md: 10 }}>
              <Text
                fontFamily="mono"
                fontSize="caption"
                letterSpacing="0.08em"
                textTransform="uppercase"
                color="text.faint"
                pt={1}
              >
                {group.group}
              </Text>
              <Wrap spacing={{ base: 2, md: 3 }}>
                {group.items.map((item) => (
                  <WrapItem key={item}>
                    <Box
                      as="span"
                      display="inline-flex"
                      alignItems="center"
                      fontFamily="mono"
                      fontSize="bodySm"
                      color="text.muted"
                      bg="bg.card"
                      border="1px solid"
                      borderColor="border.subtle"
                      borderRadius="xs"
                      px={3}
                      py="6px"
                      transition="color 180ms var(--ease-soft), border-color 180ms var(--ease-soft)"
                      _hover={{ color: "text.primary", borderColor: "border.strong" }}
                    >
                      {item}
                    </Box>
                  </WrapItem>
                ))}
              </Wrap>
            </Grid>
          </Reveal>
        ))}
      </Box>
    </Section>
  );
}
