import React from 'react';
import Tag from './Tag';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { ButtonWithIcon } from './ui/buttonWithIcon';
interface Props {
  name: string;
  client?: string;
  techStack: string[];
  role: string;
  image: StaticImageData;
  year: string;
  description: string[];
}

const ProjectCard = ({ name, year, client, role, techStack, image, description }: Props) => {
  return (
    <div className='relative lg:flex gap-8 justify-between items-start bg-backgroundTransparent px-8 py-6 rounded-xl w-full'>

      <div className='basis-1/2 flex flex-col justify-between h-full'>
        <div>
          <header className="flex justify-between items-baseline mb-1">
            <div className="font-semibold text-2xl">{name}</div>
            <div>{`${year} ${client && `• ${client}`}`}</div>
          </header>
          <div className='text-gray-300 font-semibold mb-4'>{role}</div>
          {description.map((paragraph, index) => (
            <p className='mt-2' key={index}>{paragraph}</p>
          ))}
        </div>

        <div className='flex flex-wrap gap-1'>
          {techStack.map((tech, index) => (
            <Tag name={tech} key={index} />
          ))}
        </div>
      </div>

      <div className='flex flex-col items-center justify-start lg:items-end basis-1/2'>
        <Link href={`/${name}`}>
          <ButtonWithIcon className='hover:bg-accentDark absolute right-[-0.3rem] bottom-4 text-gray-900 font-medium bg-accent rounded-s-lg lg:rounded-lg shadow-md p-2 lg:static lg:mb-4 text-right'>Read more</ButtonWithIcon>
        </Link>
        <Image
          sizes='(max-width: 1024px) 100vw, (max-width: 1400px) 50vw, 40vw'
          className='rounded-lg w-full max-w-lg'
          src={image}
          alt={`${name} app screenshot`} />
      </div>
    </div >
  );
};

export default ProjectCard;;;