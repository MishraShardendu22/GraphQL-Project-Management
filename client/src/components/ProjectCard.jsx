// import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import { Eye, Clock } from 'lucide-react';

export default function ProjectCard({ project }) {
  const handleViewClick = () => {
    toast.info(`Navigating to project: ${project.name}`);
  };

  return (
    <div className='col-md-6'>
      <div className='bg-purple-900 mb-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
        <div className='p-6'>
          <div className='flex justify-between items-center'>
            <h5 className='text-xl font-semibold text-purple-300 flex items-center'>
              <Clock className="mr-2 text-purple-400" size={20} />
              {project.name}
            </h5>
            <a
              className='bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded transition duration-300 flex items-center'
              href={`/projects/${project.id}`}
              onClick={handleViewClick}
            >
              <Eye className="mr-2" size={16} />
              View
            </a>
          </div>
          <p className='text-gray-300 mt-2 flex items-center'>
            Status: <span className='ml-2 px-2 py-1 bg-purple-700 rounded-full text-purple-200 text-sm font-medium'>{project.status}</span>
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