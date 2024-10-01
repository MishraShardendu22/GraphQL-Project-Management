/* eslint-disable no-unused-vars */
import React from 'react';
import ClientRow from './ClientRow';
import { useQuery } from "@apollo/client";
import CenteredSpinner from "../components/Spinner";
import { GET_CLIENTS } from "../queries/clientQueries";
import PropTypes from 'prop-types'; // Imported PropTypes for validation

export default function Client() {
  // Destructured the values returned by useQuery
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <CenteredSpinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {!loading && !error && (
        <table className='table table-hover mt-3'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

// PropTypes for validation
Client.propTypes = {
  client: PropTypes.object.isRequired,
};
