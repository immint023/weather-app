const axios = require('axios');
const apiKey = process.env.API_KEY;
const WeatherController = {};

WeatherController.index = (req, res) => {
  res.render('index');
};

WeatherController.postCity = (req, res) => {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
  
  axios.get(url)
    .then((response) => {
      let weather = response.data;
      let notification = `It's ${weather.main.temp} degrees in ${weather.name}`;

      return res.render('index', {
        weather: notification,
        error: null
      });    
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })
};

module.exports = WeatherController;