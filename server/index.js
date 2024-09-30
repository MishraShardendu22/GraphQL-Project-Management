import { graphqlHTTP } from 'express-graphql';
import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

import connectDB from './config/connectDB.js';
import schema from './schema/schema.js';

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

connectDB();

app.use("/graphql",graphqlHTTP (
    {
        schema,
        graphiql: process.env.NODE_ENV === 'development'
    }
))

app.listen(port, () => {
    // For Testing Purpose , env file wasn connecting,
    // moved it a layer up it started working 

    // console.log(process.env.NODE_ENV);
    // console.log(process.env.PORT);

    console.log(`\nServer is running on port ${port}`.blue.bold.underline);
    console.log(`Click To Connect to http://localhost:${port}`.blue.bold.underline);
})
    

// Trial Server Working 
    
// app.get('/', (req, res) => {
//     res.send('Hello World');
// })