import React from 'react';

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  link?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link }) => (
  <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
    <img src={image} alt={title} className="w-full h-40 object-cover rounded mb-4" />
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    {link && (
      <a href={link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    )}
  </div>
);

export default ProjectCard;
