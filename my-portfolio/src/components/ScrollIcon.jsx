import { useEffect, useState } from "react";
import { Box, Icon } from "@chakra-ui/react";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollIcon() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Box
      as="button"
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      position="fixed"
      bottom={{ base: 6, md: 10 }}
      right={{ base: 6, md: 10 }}
      zIndex={90}
      w={11}
      h={11}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="full"
      bg="bg.surface"
      color="text.muted"
      border="1px solid"
      borderColor="border.strong"
      boxShadow="md"
      opacity={visible ? 1 : 0}
      transform={visible ? "translateY(0)" : "translateY(12px)"}
      pointerEvents={visible ? "auto" : "none"}
      transition="opacity 240ms var(--ease-soft), transform 240ms var(--ease-soft), color 180ms var(--ease-soft), border-color 180ms var(--ease-soft)"
      _hover={{ color: "accent.solid", borderColor: "accent.solid" }}
    >
      <Icon as={FiArrowUp} boxSize="18px" />
    </Box>
  );
}
