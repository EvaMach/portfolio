"use client";

import React, { useEffect } from 'react';
import Tag from './Tag';
import Image from 'next/image';
import Link from 'next/link';
import { Link as LinkIcon } from 'lucide-react';
import { ButtonWithIcon } from './ui/buttonWithIcon';
import { Project } from '@/lib/projects';

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {

  useEffect(() => {
    const savedPosition = sessionStorage.getItem("scrollPosition");
    if (savedPosition) {
      window.scrollTo({ top: parseInt(savedPosition, 10) });
      sessionStorage.removeItem("scrollPosition");
    }
  }, []);

  const handleClick = () => {
    sessionStorage.setItem("scrollPosition", window.scrollY.toString());
  };

  return (
    <div className='relative lg:flex gap-8 justify-between items-start bg-backgroundTransparent p-4 md:px-8 md:py-6 rounded-xl max-w-[65rem]'>

      <div className='basis-1/2 flex flex-col justify-between lg:h-full'>
        <div>
          <header className="flex flex-wrap justify-between items-baseline mb-1">
            <div className="font-semibold text-2xl min-w-20">{project.title}</div>
            <div className='text-gray-400'>{`${project.year} ${project.client && `• ${project.client}`}`}</div>
          </header>
          <p className='text-gray-300 font-semibold mb-2'>{project.roles}</p>
          {project.shortDescription.map((paragraph, index) => (
            <p className='mt-2' key={index}>{paragraph}</p>
          ))}
        </div>
        {project.link && (
          <div className='flex items-baseline gap-2'>
            <LinkIcon className='w-4 h-4' />
            <Link className='mt-2' href={project.link}>{project.link}</Link>
          </div>
        )}
        <div className='flex flex-wrap gap-1 my-4'>
          {project.techTags.map((tech, index) => (
            <Tag name={tech} key={index} />
          ))}
        </div>
      </div>

      <div className='flex flex-col items-center justify-start lg:items-end basis-1/2'>
        <Link href={`/${project.id}`} onClick={handleClick}>
          <ButtonWithIcon className='absolute right-3 bottom-4 lg:static lg:mb-4'>Read more</ButtonWithIcon>
        </Link>
        <Image
          sizes='(max-width: 1024px) 100vw, (max-width: 1400px) 50vw, 40vw'
          className='rounded-lg w-full max-w-lg'
          src={project.image}
          alt={`${project.title} app screenshot`} />
      </div>
    </div >
  );
};

export default ProjectCard;;;
