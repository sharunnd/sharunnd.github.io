import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-scroll";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import { handleResume } from "../resume";
import { useScrolled } from "../hooks/useScrolled";
import ThemeToggle from "./ui/ThemeToggle";
import MagneticButton from "./ui/MagneticButton";

const NAV_ITEMS = [
  { label: "Home", to: "homeSection" },
  { label: "About", to: "aboutSection" },
  { label: "Experience", to: "experienceSection" },
  { label: "Skills", to: "skillsSection" },
  { label: "Work", to: "projectSection" },
  { label: "Stack", to: "techStackSection" },
  { label: "Contact", to: "contactSection" },
];

const HEADER_OFFSET = -72;

function NavLink({ item, active, onActivate, onClick }) {
  const isActive = active === item.to;
  return (
    <Link
      to={item.to}
      href={`#${item.to}`}
      spy
      smooth
      duration={500}
      offset={HEADER_OFFSET}
      onSetActive={() => onActivate(item.to)}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <Box
        as="span"
        position="relative"
        display="inline-flex"
        alignItems="center"
        gap={2}
        fontSize="bodySm"
        fontWeight={500}
        color={isActive ? "text.primary" : "text.muted"}
        transition="color 180ms var(--ease-soft)"
        _hover={{ color: "text.primary" }}
      >
        <Box
          as="span"
          w="5px"
          h="5px"
          borderRadius="full"
          bg="gold.solid"
          opacity={isActive ? 1 : 0}
          transform={isActive ? "scale(1)" : "scale(0.4)"}
          transition="opacity 200ms var(--ease-out), transform 200ms var(--ease-out)"
        />
        {item.label}
      </Box>
    </Link>
  );
}

export default function Navbar() {
  const scrolled = useScrolled(24);
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [active, setActive] = useState("homeSection");

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={100}
      transition="background-color 240ms var(--ease-soft), border-color 240ms var(--ease-soft)"
      bg={scrolled || isOpen ? "bg.surface" : "transparent"}
      borderBottom="1px solid"
      borderColor={scrolled || isOpen ? "border.subtle" : "transparent"}
      backdropFilter={scrolled || isOpen ? "saturate(160%) blur(10px)" : "none"}
    >
      <Flex
        maxW="var(--container-bleed)"
        mx="auto"
        px="var(--gutter)"
        h="72px"
        align="center"
        justify="space-between"
        gap={6}
      >
        <Link
          to="homeSection"
          href="#homeSection"
          smooth
          duration={500}
          offset={HEADER_OFFSET}
          onClick={onClose}
          style={{ cursor: "pointer" }}
        >
          <Box
            as="span"
            fontFamily="heading"
            fontSize="xl"
            fontWeight={400}
            letterSpacing="-0.01em"
            color="text.primary"
          >
            Sharun&nbsp;N&nbsp;D
          </Box>
        </Link>

        <HStack
          as="nav"
          aria-label="Primary"
          spacing={7}
          display={{ base: "none", lg: "flex" }}
        >
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} item={item} active={active} onActivate={setActive} />
          ))}
        </HStack>

        <HStack spacing={3}>
          <ThemeToggle display={{ base: "none", sm: "inline-flex" }} />
          <MagneticButton
            variant="line"
            size="sm"
            onClick={handleResume}
            rightIcon={<Icon as={FiArrowUpRight} boxSize="15px" />}
            display={{ base: "none", sm: "inline-flex" }}
          >
            Résumé
          </MagneticButton>
          <IconButton
            display={{ base: "inline-flex", lg: "none" }}
            variant="quiet"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={onToggle}
            icon={<Icon as={isOpen ? FiX : FiMenu} boxSize="20px" />}
          />
        </HStack>
      </Flex>

      {/* Mobile panel */}
      <Box
        id="mobile-nav"
        display={{ base: "block", lg: "none" }}
        overflow="hidden"
        maxH={isOpen ? "520px" : "0"}
        opacity={isOpen ? 1 : 0}
        visibility={isOpen ? "visible" : "hidden"}
        aria-hidden={!isOpen}
        {...(!isOpen ? { inert: "" } : {})}
        transition={
          isOpen
            ? "max-height 320ms var(--ease-out), opacity 220ms var(--ease-soft)"
            : "max-height 320ms var(--ease-out), opacity 220ms var(--ease-soft), visibility 0s linear 320ms"
        }
        borderTop={isOpen ? "1px solid" : "none"}
        borderColor="border.subtle"
      >
        <Flex direction="column" px="var(--gutter)" py={6} gap={5}>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              item={item}
              active={active}
              onActivate={setActive}
              onClick={onClose}
            />
          ))}
          <Flex align="center" gap={4} pt={2}>
            <ThemeToggle />
            <MagneticButton
              variant="line"
              size="sm"
              onClick={() => {
                onClose();
                handleResume();
              }}
              rightIcon={<Icon as={FiArrowUpRight} boxSize="15px" />}
            >
              Résumé
            </MagneticButton>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
