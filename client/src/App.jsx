/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Intro from './components/Intro';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Project from './pages/Project';
import Client from './components/Client';
import {Footer} from './components/Footer';
import { ApolloProvider,ApolloClient,InMemoryCache } from '@apollo/client';

// InMemoryCache in Apollo Client stores GraphQL data in memory, allowing quick access to previously fetched results without additional network requests. 
// It normalizes data, preventing duplication and enabling efficient updates when mutations occur. By automatically managing the cache, it enhances performance, keeps the UI consistent with the server's state, and provides developers with flexibility to read and write data directly.
// Overall, it plays a crucial role in optimizing data management in React applications using GraphQL.

// removed cache error from the code
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

// Client sets up the Apollo Client to connect to the GraphQL server.
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/Client" element={<Client />} />
          <Route path='/projects/:id' element={<Project />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Footer /> */}
      </ApolloProvider>
    </>
  );
}

export default App;

