import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import ProjectCard from '../../components/ProjectCard';

const projects = [
  {
    title: 'Project One',
    description: 'A cool project about something awesome.',
    image: '/project1.png',
    link: '#',
  },
  // Add more projects here
];

const ProjectsPage = () => (
  <main className="max-w-4xl mx-auto py-12 px-4">
    <SectionTitle>Projects</SectionTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      {projects.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </div>
  </main>
);

export default ProjectsPage;
