import React from 'react';
import { projects } from '../lib/projects';
import ProjectCard from './ProjectCard';

const Work = () => {
  return (
    <section>
      <h2>Work</h2>
      <div className='px-1'>
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
    </section>
  );
};

export default Work;