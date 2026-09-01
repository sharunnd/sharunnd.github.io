import { Button } from "@chakra-ui/react";
import { useMagnetic } from "../../hooks/useMagnetic";

/**
 * Chakra Button with a subtle magnetic pull toward the pointer.
 * Pass `href` to render as an external anchor. `variant` maps to the theme's
 * Button variants: "cta" | "line" | "quiet". `size` is "sm" | "md".
 * (No ref forwarding — the internal magnetic ref owns the node.)
 */
export default function MagneticButton({
  children,
  variant = "cta",
  href,
  external = true,
  rightIcon,
  leftIcon,
  size = "md",
  ...rest
}) {
  const magnetic = useMagnetic();

  const anchorProps = href
    ? {
        as: "a",
        href,
        ...(external ? { target: "_blank", rel: "noopener noreferrer" } : {}),
      }
    : {};

  const sizing =
    size === "sm"
      ? { px: 4, minH: 9, fontSize: "13px" }
      : { px: 6, minH: 12, fontSize: "bodySm" };

  return (
    <Button
      {...magnetic}
      {...anchorProps}
      variant={variant}
      h="auto"
      py={size === "sm" ? "9px" : "14px"}
      {...sizing}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      {...rest}
    >
      {children}
    </Button>
  );
}
