import CenteredSpinner from './Spinner';
import { useQuery } from '@apollo/client';
import ProjectCard from './ProjectCard';
import { GET_PROJECTS } from '../queries/projectQueries';
import { ToastContainer, toast } from 'react-toastify';

export default function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <CenteredSpinner />;
  if (error) return <p className="text-red-500">Something Went Wrong</p>;

  if (data.projects.length === 0) {
    toast.warn('No projects found!');
  }

  return (
    <>
      <ToastContainer />
      {data.projects.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className='text-gray-300'>No Projects</p>
      )}
    </>
  );
}
