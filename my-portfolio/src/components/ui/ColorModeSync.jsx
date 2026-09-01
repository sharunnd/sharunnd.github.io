import { useEffect } from "react";
import { useColorMode } from "@chakra-ui/react";

/**
 * Mirrors Chakra's color mode onto <html data-theme="…"> so the CSS custom
 * properties in styles/tokens.css follow the same switch. Renders nothing.
 */
export default function ColorModeSync() {
  const { colorMode } = useColorMode();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", colorMode);
  }, [colorMode]);

  return null;
}
