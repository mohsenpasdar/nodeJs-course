const request = require('request')
const geocode = require('./utils/geocode')

// const url = 'http://api.weatherstack.com/current?access_key=acb0687a72f5894a0a62cdbb2d75eb4a&query=40.7831,-73.9712&units=f'

// request({ url: url, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to the weather service!');
//     } else if (response.body.error) {
//         console.log('unable to find location');
//     } else {
//         console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`);
//     }
// })


geocode('Boston', (error, data) => {
    console.log('Error:', error);
    console.log('Data: ', data);
})