require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;

const weather = require('./routes/weather.route');

app.set('view engine', 'pug');

app.use(express.static('public'));

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/weather', weather);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));