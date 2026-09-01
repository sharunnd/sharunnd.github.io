// Project content is unchanged from the previous site — only the presentation
// layer around it changed. Images are imported so CRA fingerprints them.
import bookingDotCom from "../images/booking-dot-com.png";
import reciperadar from "../images/reciperadar_img.png";
import bewakoofHomePage from "../images/bewakoof-homepage.png";
import petconnects from "../images/petconnects.png";
import innov8X from "../images/innov8x.png";
import storyGenerator from "../images/story_generator.png";
import myntra from "../images/myntra.png";
import rentomojoHomePage from "../images/rentomojoHomePage.png";

const projects = [
  {
    title: "Booking.com Clone",
    image: bookingDotCom,
    description:
      "Booking.com is an online platform for booking hotels, resorts, and vacation stays across the globe",
    stack: ["HTML", "CSS", "React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/sharunnd/booking.com-clone",
    live: "https://booking-dot-com-clone.onrender.com/",
    liveLabel: "Live site",
  },
  {
    title: "RecipeRadar",
    image: reciperadar,
    description:
      "RecipeRadar leverages generative AI to curate a personalized cooking experience",
    stack: ["HTML", "CSS", "JavaScript", "Python", "OpenAI API", "Django", "Vue.js", "MySQL", "Tailwind CSS"],
    github: "https://github.com/sharunnd/recipe-recommendation-website",
    live: "https://youtu.be/M8S_KqjZt6c",
    liveLabel: "Demo video",
  },
  {
    title: "Bewakoof Clone",
    image: bewakoofHomePage,
    description: "Bewakoof is an online fashion and lifestyle E-commerce website",
    stack: ["HTML", "CSS", "JavaScript", "React", "Chackra UI"],
    github: "https://github.com/sharunnd/bewakoof-clone",
    live: "https://wondrous-starship-6605a1.netlify.app/",
    liveLabel: "Live site",
  },
  {
    title: "Petconnects",
    image: petconnects,
    description: "PetConnects allows users to adopt pets and send them to shelters",
    stack: ["HTML", "CSS", "JavaScript", "React", "Chackra UI", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/sharunnd/petconnects-pet-adoption-website",
    live: "https://petconnect-three.vercel.app/",
    liveLabel: "Live site",
  },
  {
    title: "Innov8X",
    image: innov8X,
    description: "It is an online GPT-bot for interview preparation",
    stack: ["HTML", "CSS", "JavaScript", "OpenAI", "React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/sharunnd/Interview-mentor-ai",
    live: "https://candid-kataifi-19e62b.netlify.app/",
    liveLabel: "Live site",
  },
  {
    title: "Story Generator",
    image: storyGenerator,
    description: "It is a storytelling website powered by the OpenAI API!.",
    stack: ["HTML", "CSS", "JavaScript", "OpenAI", "React", "Chakra UI", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/sharunnd/story-generator-ai",
    live: "https://story-generator-theta.vercel.app/",
    liveLabel: "Live site",
  },
  {
    title: "Myntra Clone",
    image: myntra,
    description:
      "Myntra is a major Indian fashion e-commerce company headquartered in Bengaluru, India",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/sharunnd/myntra-clone",
    live: "https://cheery-melba-acacca.netlify.app/",
    liveLabel: "Live site",
  },
  {
    title: "Rentomojo Clone",
    image: rentomojoHomePage,
    description:
      "It is an online rental platform that allows customers to rent furniture, appliances and other household items",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/sharunnd/rentomojo-clone",
    live: "https://joyful-valkyrie-7a303c.netlify.app/",
    liveLabel: "Live site",
  },
];

export default projects;
