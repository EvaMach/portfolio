import React from 'react';
import Tag from './Tag';
import Image, { StaticImageData } from 'next/image';
interface Props {
  name: string;
  techStack: string[];
  role: string;
  image: StaticImageData;
  year: string;
  description: string[];
}

const ProjectCard = ({ name, year, role, techStack, image, description }: Props) => {
  return (
    <div className='relative lg:flex justify-between bg-backgroundTransparent p-4 rounded-lg'>
      <div className='basis-1/2'>
        <header className="flex justify-between">
          <div className="font-semibold text-2xl">{name}</div>
          <div>{year}</div>
        </header>
        <div className='text-gray-300 font-semibold'>{role}</div>
        {description.map((paragraph, index) => (
          <p className='mt-2' key={index}>{paragraph}</p>
        ))}
        <div className='my-4 flex flex-wrap gap-1'>
          {techStack.map((tech, index) => (
            <Tag name={tech} key={index} />
          ))}
        </div>
      </div>
      <div className='flex flex-col items-center lg:items-end'>
        <button className='absolute right-[-0.3rem] bottom-4 text-gray-900 font-medium bg-accent rounded-s-lg lg:rounded-lg shadow-md p-2 lg:static lg:mb-4 text-right'>Read more</button>
        <Image className='rounded-lg w-full max-w-lg' src={image} alt={`${name} app screenshot`} />
      </div>
    </div >
  );
};

export default ProjectCard;