import { SimpleGrid } from "@chakra-ui/react";
import Section from "./layout/Section";
import SectionHeader from "./layout/SectionHeader";
import Reveal from "./ui/Reveal";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

export function Project() {
  return (
    <Section name="projectSection" borderTop py="clamp(112px, 14vh, 184px)">
      <SectionHeader
        id="projectSection"
        eyebrow="Selected Work"
        index={4}
        title="Things I've designed and built."
        intro="A selection of client clones, product concepts, and AI-powered experiments — each linked to its source and a live build."
      />

      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={{ base: 5, md: 6 }}>
        {projects.map((project, i) => (
          <Reveal key={project.title} index={i % 3} h="100%">
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </SimpleGrid>
    </Section>
  );
}
