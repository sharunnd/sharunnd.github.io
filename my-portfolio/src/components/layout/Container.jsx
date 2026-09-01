import { Box } from "@chakra-ui/react";

/** Centered content column with the shared gutter. `wide` uses the bleed width. */
export default function Container({ children, wide = false, ...rest }) {
  return (
    <Box
      mx="auto"
      w="100%"
      maxW={wide ? "var(--container-bleed)" : "var(--container-max)"}
      px="var(--gutter)"
      {...rest}
    >
      {children}
    </Box>
  );
}
