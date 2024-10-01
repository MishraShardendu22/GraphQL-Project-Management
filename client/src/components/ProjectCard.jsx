import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';

export default function ProjectCard({ project }) {
  const handleViewClick = () => {
    toast.info(`Navigating to project: ${project.name}`);
  };

  return (
    <div className='col-md-6'>
      <div className='bg-gray-800 mb-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
        <div className='p-6'>
          <div className='flex justify-between items-center'>
            <h5 className='text-xl font-semibold text-purple-300'>{project.name}</h5>
            <a
              className='bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded transition duration-300'
              href={`/projects/${project.id}`}
              onClick={handleViewClick}
            >
              View
            </a>
          </div>
          <p className='text-gray-400 mt-2'>
            Status: <strong>{project.status}</strong>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};
