/* eslint-disable no-unused-vars */
import { Trash2 } from 'lucide-react';
import { useMutation } from '@apollo/client';
import { DELETE_CLIENT } from '../mutations/clientMutations';
import { GET_CLIENTS } from '../queries/clientQueries';
import { GET_PROJECTS } from '../queries/projectQueries';
import PropTypes from 'prop-types';

export default function ClientRow({ client }) {
    const [deleteClient] = useMutation(DELETE_CLIENT, {
        variables: { id: client.id },
        refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
    });

    return (
        <tr>
            <td>{client.name}</td>
            <td>{client.email}</td>
            <td>{client.phone}</td>
            <td>
                <button className='btn btn-danger btn-sm' onClick={deleteClient}>
                    <Trash2 />
                </button>
            </td>
        </tr>
    );
}

ClientRow.propTypes = {
    client: PropTypes.object.isRequired,
};