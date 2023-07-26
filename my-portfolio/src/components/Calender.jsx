import { Box, SimpleGrid, Image, Heading, Flex, Center } from "@chakra-ui/react";
import GithubCalendar from "react-github-calendar";

export function Calender() {
  return (
    <Box className="react-activity-calendar" mt={{ base: 5, md: 10, lg: 20 }}>
      <Heading textAlign="center" fontSize={{ base: "xl", md: "3xl", lg: "4xl" }} mb={5}>
        Github Calendar
      </Heading>
      <Center>
        <GithubCalendar
          username="sharunnd"
          responsive
          global_stats
          tooltips={false}
          summary_text=""
          years_format="YYYY"
          colors={{
            bg: "#fff",
            grade4: "#216e39",
            grade3: "#30a14e",
            grade2: "#40c463",
            grade1: "#9be9a8",
            grade0: "#ebedf0",
          }}
        />
      </Center>
      <Heading textAlign="center" fontSize={{ base: "xl", md: "3xl", lg: "4xl" }} mt={10} mb={5}>
        Github Stats
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} textAlign="center" alignItems="center" spacing={10}>
        <Box>
          <Image
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=sharunnd&hide=contribs,prs"
            width="100%"
          />
        </Box>
        <Box>
          <Image id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com/?user=sharunnd" width="100%" />
        </Box>
        <Box>
          <Image id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=sharunnd&hide_progress=true" width="100%" />
        </Box>
      </SimpleGrid>
    </Box>
  );
}
