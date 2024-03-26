const amqp = require('amqplib');

const url = 'amqps://hwtrldtj:UVoSAWWGvOTOlnc3XbT2jh1umzsUqpqw@cow.rmq2.cloudamqp.com/hwtrldtj'


export async function produceMessage(queueName: string, message: string) {
  console.log("produceMessage was called")
  const connection = await amqp.connect(url);
  const channel = await connection.createChannel();

  await channel.assertQueue(queueName);
  channel.sendToQueue(queueName, Buffer.from(message));

  console.log(`Sent: ${message}`);
  
  setTimeout(() => {
    connection.close();
  }, 500);
}

// export async function consumeMessage(queueName: string) {
//   const connection = await amqp.connect(url);
//   const channel = await connection.createChannel();

//   await channel.assertQueue(queueName);
//   console.log('Waiting for messages...');

//   channel.consume(queueName, (message) => {
//     const content = message.content.toString();
//     console.log(`Received: ${content}`);
//   }, { noAck: false });
// }
