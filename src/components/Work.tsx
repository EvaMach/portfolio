import React from 'react';
import { projects } from '../lib/projects';
import ProjectCard from './ProjectCard';

const Work = () => {
  return (
    <section id="work" className='scroll-mt-24'>
      < h2 className='mb-4 font-bold text-4xl' > Work</h2 >
      <div className='grid gap-4 px-1'>
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            image={project.image}
            name={project.name}
            year={project.year}
            role={project.roles}
            techStack={project.techStack}
            description={project.description} />))}
      </div>
    </section >
  );
};

export default Work;