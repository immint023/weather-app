const Router = require('express');
const WeatherController = require('../controllers/weather.controller');

const router = new Router();

router.get('/', WeatherController.index);

router.post('/', WeatherController.postCity);

module.exports = router;