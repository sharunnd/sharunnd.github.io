import { Box, SimpleGrid,Image } from "@chakra-ui/react";
import  GithubCalendar  from "react-github-calendar";


export function Calender(){
  
    return (
        <Box className="react-activity-calendar">
        <Box>
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
        </Box>
            
        <SimpleGrid columns={3}>    
            <Box id="github-stats-card">
              <Image src="https://github-readme-stats.vercel.app/api?username=sharunnd&hide=contribs,prs"/>
            </Box>
            <Box id="github-streak-stats">
              <Image src="https://github-readme-streak-stats.herokuapp.com/?user=sharunnd"/>
            </Box>
            <Box id="github-top-langs">
              <Image src="https://github-readme-stats.vercel.app/api/top-langs/?username=sharunnd&hide_progress=true"/>
            </Box>
        </SimpleGrid>
        </Box>

      );

        
}