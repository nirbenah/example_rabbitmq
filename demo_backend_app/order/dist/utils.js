"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.produceMessage = void 0;
const amqp = require('amqplib');
const url = 'amqps://hwtrldtj:UVoSAWWGvOTOlnc3XbT2jh1umzsUqpqw@cow.rmq2.cloudamqp.com/hwtrldtj';
async function produceMessage(queueName, message) {
    console.log("produceMessage was called");
    const connection = await amqp.connect(url);
    const channel = await connection.createChannel();
    await channel.assertQueue(queueName);
    channel.sendToQueue(queueName, Buffer.from(message));
    console.log(`Sent: ${message}`);
    setTimeout(() => {
        connection.close();
    }, 500);
}
exports.produceMessage = produceMessage;
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
//# sourceMappingURL=utils.js.map