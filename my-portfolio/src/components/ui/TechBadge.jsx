import { Box } from "@chakra-ui/react";

/** Small monospace pill for a technology name. */
export default function TechBadge({ children, ...rest }) {
  return (
    <Box
      as="span"
      display="inline-flex"
      alignItems="center"
      fontFamily="mono"
      fontSize="11px"
      letterSpacing="0.02em"
      color="text.muted"
      bg="bg.surface"
      border="1px solid"
      borderColor="border.subtle"
      borderRadius="xs"
      px={2}
      py="3px"
      whiteSpace="nowrap"
      {...rest}
    >
      {children}
    </Box>
  );
}
