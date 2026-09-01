import { Box } from "@chakra-ui/react";
import { Element } from "react-scroll";
import Container from "./Container";

/**
 * A page section. `name` is the react-scroll target (keep in sync with Navbar).
 * `id` defaults to `name` for anchor/landmark semantics. Nav links pass
 * `offset={-72}` to account for the sticky header.
 */
export default function Section({
  name,
  id,
  children,
  wide = false,
  container = true,
  hasHeader = true,
  py = "var(--section-py)",
  bg,
  borderTop = false,
  ...rest
}) {
  const body = container ? <Container wide={wide}>{children}</Container> : children;

  return (
    <Box
      as="section"
      id={id || name}
      aria-labelledby={hasHeader && name ? `${name}-title` : undefined}
      position="relative"
      py={py}
      bg={bg}
      borderTop={borderTop ? "1px solid" : undefined}
      borderColor={borderTop ? "border.subtle" : undefined}
      {...rest}
    >
      {name ? (
        <Element name={name} style={{ width: "100%" }}>
          {body}
        </Element>
      ) : (
        body
      )}
    </Box>
  );
}
