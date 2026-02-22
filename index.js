import express from 'express';

const host = '0.0.0.0';
const porta = 3000;

const server = express(); //oferecendo ao desenvolvedor um servidor HTTP de modo expresso.

//preencher o servidor com funcionalidades.
server.get('/', (req, res) => {
    res.send(`
        <DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Servidor Express</title>
        </head>
        <body>
            <h1>Primeiro programa para a internet usando Node + Express.</h1>

            <h2>Bem vindo a Página Inicial</h2>
        </body>
        </html>
    `);
});

server.get('/horaAtual', (req, res) => {
    const horaAtual = new Date();
    const hora = horaAtual.getHours() + ":" + horaAtual.getMinutes() + ":" + horaAtual.getSeconds();
    res.send(`<DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <title>Hora Atual</title>
        </head>
        <body>
            <h1>Hora Atual:</h1>
            <h2>${hora}</h2>
        </body>
        </html>
    `);
});

server.listen(porta, host, () => {
    console.log(`Servidor rodando em http://${host}:${porta}`);
});