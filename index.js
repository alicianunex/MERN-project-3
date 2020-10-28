import express from 'express';
import bodyParser from 'body-parser';

const HOST = '127.0.0.1';
const PORT = 5000;

// Creacion del servidor
const server = express();

server.use(bodyParser.json());
// Inicializa el servidor
server.listen(
  PORT,
  () =>
    // utilizando el logger de la libreria winston imprimo en consola que el servidor se ha iniciado
    logger.info(`server listening ${JSON.stringify({ HOST, PORT })}`),
  console.log(`Working`),
);
