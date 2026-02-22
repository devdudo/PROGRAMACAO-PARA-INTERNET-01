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

//criar um método que aceita parâmetros na URL, por exemplo: http://localhost:3000/saudacao/eduardo
server.get('/tabuada', (req, res) => {
   //Tabuada de qual número o usuário deseja ver?
   //Até qual sequência o usuário deseja ver a tabuada?

   const numero = parseInt(req.query.numero); //parseInt para converter a string em número inteiro.
   const sequencia = parseInt(req.query.sequencia); //parseInt para converter a string em número inteiro.

   if(!numero || !sequencia) {
        res.send(`
            <DOCTYPE html>
            <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <title>Tabuada</title>
            </head>
            <body>
                <h1>Tabuada</h1>
                <p>Por favor, forneça os parâmetros corretos na URL.</p>
                <p>Exemplo: http://localhost:3000/tabuada?numero=5&sequencia=10</p>
            </body>
            </html>
        `);
   } else {
        res.setHeader('Content-Type', 'text/html'); //Definir o tipo de conteúdo da resposta como HTML.

        res.write(`
        <DOCTYPE html>
            <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <title>Tabuada</title>
            </head>
            <body>
                <h1>Tabuada do ${numero} até a sequência ${sequencia}.</h1>
                <ul>
        `);

        for(let i = 1; i <= sequencia; i++) {
            res.write(`<li>${numero} x ${i} = ${numero * i}</li>`);
        }

        res.write(`
                </ul>
            </body>
            </html>
        `);
        
        res.end(); //Finaliza e envia a resposta ao cliente.
   }
});

server.listen(porta, host, () => {
    console.log(`Servidor rodando em http://${host}:${porta}`);
});