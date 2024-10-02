import { graphqlHTTP } from 'express-graphql';
import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';  

import cors from 'cors'; // Import CORS
// address cors issue of front and back end

import connectDB from './config/connectDB.js';
import schema from './schema/schema.js';

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

connectDB();

// Enable CORS
app.use(cors());

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}));

app.listen(port, () => {
    console.log(`\nServer is running on port ${port}`.blue.bold.underline);
    console.log(`Click To Connect to http://localhost:${port}`.blue.bold.underline);
});

// Trial Server Working 
// app.get('/', (req, res) => {
//     res.send('Hello World');
// });
