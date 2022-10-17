const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=acb0687a72f5894a0a62cdbb2d75eb4a&query=37.8267,-122.4233&units=f'

request({ url: url, json: true}, (error, response) => {
    // console.log(response.body.current);
    console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`);
})

const geocodeURL = 'http://api.positionstack.com/v1/forward?access_key=424f83dea0dc3f1072dcad218503cbcc&query=Dehdasht&limit=1'

request({ url: geocodeURL, json: true}, (error, response) => {
    const latitude = response.body.data[0].latitude
    const longitude = response.body.data[0].longitude
    console.log(latitude, longitude);
})