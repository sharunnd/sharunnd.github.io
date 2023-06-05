import { Box, SimpleGrid,Image, Heading, Flex, Center } from "@chakra-ui/react";
import  GithubCalendar  from "react-github-calendar";


export function Calender(){
  
    return (
        <Box className="react-activity-calendar">
        <Heading ml={50} mt={50}>Github Calender</Heading>
        <Center mt={50}>
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
        <Heading ml={50} mt={50}>Github Stats</Heading> 
        <SimpleGrid columns={3} textAlign={"center"} alignItems={"center"} spacing={30}>    
            <Box >
              <Image id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=sharunnd&hide=contribs,prs" width="100%"/>
            </Box>
            <Box >
              <Image id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com/?user=sharunnd" width="100%"/>
            </Box>
            <Box >
              <Image id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=sharunnd&hide_progress=true" width="100%"/>
            </Box>
        </SimpleGrid>
            
        </Box>

      );

        
}