/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Briefcase, Clock, User } from 'lucide-react';

export default function ProjectCard({ project }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Not Started':
        return 'bg-yellow-100 text-yellow-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Completed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-gray-800 truncate">{project.name}</h3>
          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(project.status)}`}>
            {project.status}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Clock className="w-4 h-4 mr-2" />
          <span>Due: {new Date(project.dueDate).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <User className="w-4 h-4 mr-2" />
          <span>{project.client.name}</span>
        </div>
      </div>
      <div className="px-6 py-4 bg-gray-50 flex justify-between items-center">
        <div className="flex items-center text-sm font-medium text-purple-600">
          <Briefcase className="w-4 h-4 mr-1" />
          <span>{project.tasks.length} Tasks</span>
        </div>
        <Link 
          to={`/projects/${project.id}`}
          className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700 transition-colors duration-300 ease-in-out"
        >
          View Project
        </Link>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    description: PropTypes.string,
    dueDate: PropTypes.string,
    client: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    tasks: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};