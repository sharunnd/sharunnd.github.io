import { Box, Icon, Link } from "@chakra-ui/react";

/**
 * An external link presented as an icon plus an underline-on-hover label.
 * `icon` is a react-icons component. Omit `children` for an icon-only link
 * (provide `aria-label` in that case).
 */
export default function IconLink({ icon, children, href, external = true, "aria-label": ariaLabel, ...rest }) {
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      aria-label={ariaLabel}
      display="inline-flex"
      alignItems="center"
      gap={2}
      color="text.muted"
      fontSize="bodySm"
      transition="color 180ms var(--ease-soft)"
      _hover={{ color: "accent.solid" }}
      _focusVisible={{ color: "accent.solid" }}
      {...rest}
    >
      {icon && <Icon as={icon} boxSize="18px" strokeWidth={1.75} flexShrink={0} />}
      {children && (
        <Box as="span" className="u-link">
          {children}
        </Box>
      )}
    </Link>
  );
}
