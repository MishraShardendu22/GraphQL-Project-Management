/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import {Footer} from './components/Footer';
import { ApolloProvider,ApolloClient,InMemoryCache } from '@apollo/client';

// InMemoryCache in Apollo Client stores GraphQL data in memory, allowing quick access to previously fetched results without additional network requests. 
// It normalizes data, preventing duplication and enabling efficient updates when mutations occur. By automatically managing the cache, it enhances performance, keeps the UI consistent with the server's state, and provides developers with flexibility to read and write data directly.
// Overall, it plays a crucial role in optimizing data management in React applications using GraphQL.


// Client sets up the Apollo Client to connect to the GraphQL server.
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache : new InMemoryCache()
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </ApolloProvider>
    </>
  );
}

export default App;

