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
    setTimeout(() => {
        res.json(successFile);
    }, 1000);
})

app.post('/empty', function (req, res) {
    setTimeout(() => {
        res.json(emptyFile);
    }, 1000);
})

app.post('/error', function (req, res) {
    setTimeout(() => {
        res.status(500).send();
}, 1000);
})

app.post('/random', function (req, res) {
    setTimeout(() => {
        const rand = Math.random();

        if (rand< 0.2) {
            res.status(500).send();
        } else {
            res.json(successFile);
        }
    }, 1000);
})


app.listen(3000, () => console.log('Gator app listening on port 3000!'));
