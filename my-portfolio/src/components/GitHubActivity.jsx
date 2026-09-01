import React from "react";
import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import GitHubCalendar from "react-github-calendar";
import Section from "./layout/Section";
import SectionHeader from "./layout/SectionHeader";
import Reveal from "./ui/Reveal";
import IconLink from "./ui/IconLink";
import site from "../data/site";

const CALENDAR_THEME = {
  light: ["#ECE6DE", "#E7C6A6", "#D89A6B", "#C07E4E", "#9A5326"],
  dark: ["#1B1B1F", "#3A2A20", "#6B4527", "#A2622F", "#E2A063"],
};

/**
 * Catches a render-time error in the calendar subtree and falls back to a
 * link. Note: react-github-calendar v4 swallows fetch failures into its own
 * state and renders its own "Unable to fetch…" text rather than throwing, so
 * the always-present "View full profile" link below is the real safety net
 * for an API outage.
 */
class CalendarBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    if (this.state.failed) {
      return (
        <Text fontSize="bodySm" color="text.faint">
          GitHub activity is unavailable right now.
        </Text>
      );
    }
    return this.props.children;
  }
}

export function GitHubActivity() {
  const { colorMode } = useColorMode();

  return (
    <Section name="githubSection" borderTop>
      <SectionHeader
        id="githubSection"
        eyebrow="Activity"
        index={6}
        title="Consistent, in the open."
      />

      <Reveal
        p={{ base: 6, md: 10 }}
        bg="bg.card"
        border="1px solid"
        borderColor="border.subtle"
        borderRadius="md"
        boxShadow="topHighlight"
        sx={{
          ".react-activity-calendar__count, .react-activity-calendar__legend-month": {
            color: "var(--text-faint)",
          },
          text: { fill: "var(--text-faint)" },
        }}
      >
        <Box overflowX="auto" mb={7}>
          <CalendarBoundary>
            <GitHubCalendar
              username={site.githubUser}
              colorScheme={colorMode === "light" ? "light" : "dark"}
              theme={CALENDAR_THEME}
              blockSize={12}
              blockMargin={4}
              blockRadius={2}
              fontSize={13}
              hideColorLegend
              hideTotalCount
            />
          </CalendarBoundary>
        </Box>

        <Flex pt={6} borderTop="1px solid" borderColor="border.subtle">
          <IconLink icon={FiArrowUpRight} href={site.github}>
            {`View full profile on github.com/${site.githubUser}`}
          </IconLink>
        </Flex>
      </Reveal>
    </Section>
  );
}
