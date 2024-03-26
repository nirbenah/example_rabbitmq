
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import {
    postOrdersRoute,
} from './routes.js';

import {
    POST_ORDER,
} from './consts.js';

dotenv.config();
// try{
//     // Connect to mongoDB
//     //const dbURI = `mongodb+srv://admin:${process.env.DBPASS}@cluster0.vpn2j6g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
//     const dbURI = `mongodb+srv://nir:tMHPJOL68p3SQVGD@cluster0.vpn2j6g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    
//     await mongoose.connect(dbURI);
//     console.log("Connectedddd")
// /* ========== */
// }catch(error){
//     console.log("didnt connect", error)

// }


const port =  7000;

const app = express();

app.use(express.json());
app.use(cookieParser());
// const corsOptions = {
//     origin: frontendURL,
//     credentials: true,
//   };
// app.use(cors(corsOptions));

app.post('/', (req, res) => {
    console.log("Hello")
    res.send('Hello World!!!');
});


app.post(POST_ORDER, postOrdersRoute);

app.listen(port, () => {
    console.log(`Server running! port ${port}`);
});

// TODO: update permissions

