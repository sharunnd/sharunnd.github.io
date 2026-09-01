import { useColorMode, IconButton, Icon } from "@chakra-ui/react";
import { FiSun, FiMoon } from "react-icons/fi";

/** Dark / light switch. Persists via Chakra's color-mode manager. */
export default function ThemeToggle(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <IconButton
      onClick={toggleColorMode}
      variant="quiet"
      size="sm"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={!isDark}
      color="text.muted"
      borderRadius="sm"
      _hover={{ color: "accent.solid", bg: "bg.wash" }}
      icon={
        <Icon
          as={isDark ? FiMoon : FiSun}
          boxSize="18px"
          strokeWidth={1.75}
          transition="transform 200ms var(--ease-out), opacity 200ms var(--ease-out)"
        />
      }
      {...props}
    />
  );
}
