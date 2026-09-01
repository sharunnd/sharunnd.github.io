import { Box, Flex, Icon, Link, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { FiGithub, FiArrowUpRight } from "react-icons/fi";
import TechBadge from "./ui/TechBadge";

export default function ProjectCard({ project, index }) {
  const { title, image, description, stack, github, live, liveLabel } = project;

  return (
    <Box
      role="group"
      display="flex"
      flexDirection="column"
      h="100%"
      bg="bg.card"
      border="1px solid"
      borderColor="border.subtle"
      borderRadius="md"
      overflow="hidden"
      boxShadow="topHighlight"
      transition="transform 240ms var(--ease-soft), border-color 240ms var(--ease-soft), box-shadow 240ms var(--ease-soft), background 240ms var(--ease-soft)"
      _hover={{
        transform: "translateY(-4px)",
        borderColor: "border.strong",
        boxShadow: "lg",
        bg: "bg.cardHover",
      }}
    >
      <Box position="relative" overflow="hidden" sx={{ aspectRatio: "16 / 10" }} bg="bg.surface">
        <Box
          as="img"
          src={image}
          alt={`${title} — screenshot`}
          loading="lazy"
          w="100%"
          h="100%"
          objectFit="cover"
          objectPosition="top"
          filter="saturate(0.92)"
          transition="transform 600ms var(--ease-out), filter 400ms var(--ease-out)"
          _groupHover={{ transform: "scale(1.03)", filter: "saturate(1)" }}
        />
        <Box
          aria-hidden
          position="absolute"
          inset={0}
          bgGradient="linear(to-t, rgba(0,0,0,0.28), transparent 45%)"
          opacity={0.6}
        />
      </Box>

      <Flex direction="column" flex="1" p={{ base: 6, md: 7 }}>
        <Text fontFamily="mono" fontSize="eyebrow" color="text.faint" mb={3}>
          {`WORK ${String(index + 1).padStart(2, "0")}`}
        </Text>

        <Text as="h3" fontSize="h4" fontWeight={600} color="text.primary" mb={3}>
          {title}
        </Text>

        <Text
          fontSize="bodySm"
          color="text.muted"
          mb={6}
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </Text>

        <Wrap spacing={2} mb={7}>
          {stack.slice(0, 5).map((tech) => (
            <WrapItem key={tech}>
              <TechBadge>{tech}</TechBadge>
            </WrapItem>
          ))}
          {stack.length > 5 && (
            <WrapItem>
              <TechBadge>{`+${stack.length - 5}`}</TechBadge>
            </WrapItem>
          )}
        </Wrap>

        <Flex mt="auto" align="center" gap={6} pt={5} borderTop="1px solid" borderColor="border.subtle">
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} on GitHub`}
            display="inline-flex"
            alignItems="center"
            gap={2}
            fontSize="bodySm"
            color="text.muted"
            transition="color 180ms var(--ease-soft)"
            _hover={{ color: "accent.solid" }}
            _focusVisible={{ color: "accent.solid" }}
          >
            <Icon as={FiGithub} boxSize="17px" />
            <Box as="span" className="u-link">
              Code
            </Box>
          </Link>
          <Link
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} — ${liveLabel}`}
            display="inline-flex"
            alignItems="center"
            gap={2}
            fontSize="bodySm"
            color="text.muted"
            transition="color 180ms var(--ease-soft)"
            _hover={{ color: "accent.solid" }}
            _focusVisible={{ color: "accent.solid" }}
          >
            <Icon as={FiArrowUpRight} boxSize="17px" />
            <Box as="span" className="u-link">
              {liveLabel}
            </Box>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
