import React from 'react';

interface Props {
  name: string;
}

const Tag = ({ name }: Props) => {
  return (
    <span className='bg-accentTransparent text-accent font-medium px-2 py-1 rounded-full'>{name}</span>
  );
};

export default Tag;