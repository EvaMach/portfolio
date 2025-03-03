import React from 'react';
import { projects } from '../lib/projects';
import ProjectCard from './ProjectCard';

const Work = () => {
  return (
    <section id="work" className='scroll-mt-24'>
      <h2>Work</h2>
      <p>Here are some of the professional projects I&apos;ve worked on for in the last few years.</p>
      <div className='grid gap-4 px-1 mt-4 justify-items-center'>
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            image={project.image}
            client={project.client}
            name={project.name}
            year={project.year}
            role={project.roles}
            techStack={project.techTags}
            description={project.shortDescription} />))}
      </div>
    </section >
  );
};

export default Work;