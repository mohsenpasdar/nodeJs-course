const request = require('request')

// const url = 'http://api.weatherstack.com/current?access_key=acb0687a72f5894a0a62cdbb2d75eb4a&query=&units=f'

// request({ url: url, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to the weather service!');
//     } else if (response.body.error) {
//         console.log('unable to find location');
//     } else {
//         console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`);
//     }
// })

const geocodeURL = 'http://api.positionstack.com/v1/forward?access_key=424f83dea0dc3f1072dcad218503cbcc&query=Tehran&limit=1'

request({ url: geocodeURL, json: true}, (error, response) => {
    if (error) {
        console.log('Unable to connect to the geocoding service!');
    } else if (response.body.data.length === 0) {
        console.log('unable to find location. Try another search!');
    } else {
        const latitude = response.body.data[0].latitude
        const longitude = response.body.data[0].longitude
        console.log(latitude, longitude);
    }
  
})