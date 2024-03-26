
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
const amqp = require('amqplib');


import {
    postCommentRoute,
} from './routes.js';

import {
    POST_COMMENT
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


const port =  5000;

const app = express();

app.use(express.json());
app.use(cookieParser());
// const corsOptions = {
//     origin: frontendURL,
//     credentials: true,
//   };
// app.use(cors(corsOptions));

app.post('/', (req, res) => {
    res.send('Hello World!');
});


app.post(POST_COMMENT, postCommentRoute);

app.listen(port, () => {
    console.log(`Server running! port ${port}`);
});



const url = 'amqps://hwtrldtj:UVoSAWWGvOTOlnc3XbT2jh1umzsUqpqw@cow.rmq2.cloudamqp.com/hwtrldtj'


export async function consumeMessage(queueName: string) {
    console.log("consumeMessage was called")
  const connection = await amqp.connect(url);
  const channel = await connection.createChannel();

  await channel.assertQueue(queueName);
  console.log('Waiting for messages...');

  channel.consume(queueName, (message) => {
    const content = message.content.toString();
    console.log(`Received: ${content}`);
    channel.ack(message)
  });
  
}

consumeMessage("to_comment")