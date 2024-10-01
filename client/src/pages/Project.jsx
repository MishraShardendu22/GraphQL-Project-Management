import { Link, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import ClientInfo from '../components/ClientInfo';
import DeleteProjectButton from '../components/DeleteProjectButton';
import EditProjectForm from '../components/EditProjectForm';
import { useQuery } from '@apollo/client';
import { GET_PROJECT } from '../queries/projectQueries';
import { ToastContainer, toast } from 'react-toastify';

export default function Project() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } });

  if (loading) return <Spinner />;
  if (error) {
    toast.error('Something went wrong!');
    return <p className="text-red-500">Something Went Wrong</p>;
  }

  return (
    <>
      <ToastContainer />
      <div className='container mx-auto mt-4 p-6 bg-gray-800 rounded-lg shadow-md'>
        <Link to='/home' className='bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded transition duration-300 mb-4 inline-block'>
          Back
        </Link>

        <h1 className='text-3xl font-bold text-purple-300'>{data.project.name}</h1>
        <p className='text-gray-300'>{data.project.description}</p>

        <h5 className='mt-3 text-xl font-semibold text-purple-400'>Project Status</h5>
        <p className='lead text-gray-400'>{data.project.status}</p>

        <ClientInfo client={data.project.client} />
        <EditProjectForm project={data.project} />
        <DeleteProjectButton projectId={data.project.id} />
      </div>
    </>
  );
}
