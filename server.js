const express = require('express');
const bodyParser = require('body-parser');
const app = express();
server.keepAliveTimeout = 80000;
server.headersTimeout = 81000;
app.use(cors())

const port = 3000;

app.use(bodyParser.json());

let number = 0;

app.post('/number', (req, res) => {
    number = req.body.number;
    res.send('Number received');
});

app.get('/', (req, res) => {
    res.send(`
        <html>
            <body>
                <h1>Number: ${number}</h1>
            </body>
        </html>
    `);
});
