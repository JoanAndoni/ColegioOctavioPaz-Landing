const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/home.html'));
});

app.get('*', (req, res) => {
    res.redirect('/');
});

app.listen(port, () => console.log(`Listening on port ${port}`));