import { Box, Heading, Text } from "@chakra-ui/react";
import Reveal from "../ui/Reveal";

/**
 * Consistent section masthead: monospace eyebrow + index, a single <h2>,
 * and an optional intro paragraph. `id` should match the Section `name` so
 * `aria-labelledby` resolves.
 */
export default function SectionHeader({ eyebrow, index, title, intro, id, align = "left", maxW = "46ch" }) {
  return (
    <Box mb={{ base: 12, md: 16 }} textAlign={align}>
      <Reveal>
        <Box
          display="flex"
          alignItems="center"
          gap={3}
          justifyContent={align === "center" ? "center" : "flex-start"}
          mb={5}
        >
          {index != null && (
            <Box as="span" fontFamily="mono" fontSize="eyebrow" color="accent.solid">
              {String(index).padStart(2, "0")}
            </Box>
          )}
          <Box as="span" w={8} h="1px" bg="border.strong" />
          <Box
            as="span"
            fontFamily="mono"
            fontSize="eyebrow"
            letterSpacing="0.16em"
            textTransform="uppercase"
            color="text.faint"
          >
            {eyebrow}
          </Box>
        </Box>
      </Reveal>

      <Reveal index={1}>
        <Heading as="h2" id={id ? `${id}-title` : undefined} fontSize="h2" maxW={maxW} mx={align === "center" ? "auto" : undefined}>
          {title}
        </Heading>
      </Reveal>

      {intro && (
        <Reveal index={2}>
          <Text
            mt={6}
            fontSize="lead"
            color="text.muted"
            maxW="60ch"
            mx={align === "center" ? "auto" : undefined}
          >
            {intro}
          </Text>
        </Reveal>
      )}
    </Box>
  );
}
