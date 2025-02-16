import React from 'react';
import { projects } from '@/lib/projects';
import ProjectCard from './ProjectCard';

const Work = () => {
  return (
    <section>
      <h2>Work</h2>
      {projects.map((project) => (
        <ProjectCard key={project.name} {...project} />))}
    </section>
  );
};

export default Work;