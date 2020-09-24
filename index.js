const express = require('express');
const cors = require('cors');
const app = express();

const successFile = require('./public/success.json');
const emptyFile = require('./public/empty.json');

app.use(express.static('public'));
app.use(cors());

app.get('/', (req, res) => {
    res.send('An alligator approaches!');
});

app.post('/success', function (req, res) {
    res.json(successFile);
})

app.post('/empty', function (req, res) {
    res.json(emptyFile);
})

app.post('/error', function (req, res) {
    res.status(500).send();
})

app.listen(3000, () => console.log('Gator app listening on port 3000!'));
