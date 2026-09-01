import { Box } from "@chakra-ui/react";
import { useReveal } from "../../hooks/useReveal";

/**
 * Fade-and-rise reveal on scroll. `index` staggers grouped children
 * (delay = index * 70ms). Set `as` to change the rendered element.
 */
export default function Reveal({ children, index = 0, as = "div", className = "", style, ...rest }) {
  const [ref, visible] = useReveal();

  return (
    <Box
      ref={ref}
      as={as}
      className={`reveal${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={{ "--i": index, ...style }}
      {...rest}
    >
      {children}
    </Box>
  );
}
