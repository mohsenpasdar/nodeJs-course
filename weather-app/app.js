const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=acb0687a72f5894a0a62cdbb2d75eb4a&query=37.8267,-122.4233&units=f'

request({ url: url, json: true}, (error, response) => {
    // console.log(response.body.current);
    console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`);
})