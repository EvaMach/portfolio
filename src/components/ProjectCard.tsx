import React from 'react';

interface Props {
  name: string;
}

const ProjectCard = ({ name }: Props) => {
  return (
    <div>
      <div>{name}</div>
    </div>
  );
};

export default ProjectCard;