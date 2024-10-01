/* eslint-disable no-unused-vars */
import React from 'react';
import { useQuery } from '@apollo/client';
import { Folder, AlertCircle } from 'lucide-react';
import { GET_PROJECTS } from '../queries/projectQueries';
import CenterizedSpinner from './Spinner'; // Import your spinner
import ProjectCard from './ProjectCard';

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <CenterizedSpinner />; // Use CenterizedSpinner
  if (error) return <ErrorMessage />;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-purple-400">Project Dashboard</h1>
        <p className="text-xl text-gray-300">Manage and track your projects with ease</p>
      </header>

      <main className="container mx-auto px-4 py-8">
        {data.projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <NoProjects />
        )}
      </main>

      <footer className="container mx-auto px-4 py-8 text-center">
        <p className="text-gray-400">&copy; 2024 GraphQL Project Hub. All rights reserved.</p>
      </footer>
    </div>
  );
};


const ErrorMessage = () => (
  <div className="flex flex-col items-center justify-center h-screen">
    <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
    <p className="text-xl text-red-400">Something Went Wrong</p>
  </div>
);

const NoProjects = () => (
  <div className="text-center py-12">
    <Folder className="w-16 h-16 text-gray-600 mx-auto mb-4" />
    <p className="text-2xl text-gray-400">No Projects Found</p>
    <p className="text-gray-500 mt-2">Start by creating a new project</p>
  </div>
);

export default Projects;
