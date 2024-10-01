// import React from 'react';
import { useQuery } from '@apollo/client';
import { ToastContainer, toast } from 'react-toastify';
import { Loader, AlertCircle } from 'lucide-react';
import { GET_PROJECTS } from '../queries/projectQueries';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <Loader className="animate-spin text-purple-500" size={48} />
    </div>
  );

  if (error) return (
    <div className="flex items-center justify-center h-64 text-red-500">
      <AlertCircle className="mr-2" size={24} />
      <p>Something Went Wrong</p>
    </div>
  );

  if (data.projects.length === 0) {
    toast.warn('No projects found!');
  }

  return (
    <div className="container mx-auto px-4">
      <ToastContainer />
      {data.projects.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className='text-gray-300 text-center text-xl mt-8'>No Projects Available</p>
      )}
    </div>
  );
}