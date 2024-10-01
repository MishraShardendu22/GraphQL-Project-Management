import Client from '../components/Client';
import Projects from '../components/Projects';
import AddClientModel from '../components/AddClientModel';
import AddProjectModel from '../components/AddProjectModel';
import { ToastContainer, toast } from 'react-toastify';

export default function Home() {
  const notifySuccess = () => {
    toast.success('Client or Project added successfully!');
  };

  return (
    <>
      <ToastContainer />
      <div className='flex gap-3 mb-4'>
        <AddClientModel notifySuccess={notifySuccess} />
        <AddProjectModel notifySuccess={notifySuccess} />
      </div>
      <Projects />
      <hr className='my-8 border-gray-700' />
      <Client />
    </>
  );
}
