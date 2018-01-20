const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const api = require('./server/routes/api');
const app = express();

// creation d'un middleware pour acceder au repertoire dist
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api',api);

app.get('/', (req, res) => {
    res.send('app works')
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'dist/index.html'));
});

const port = process.env.port || 3000;
app.set('port', port);

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
});
