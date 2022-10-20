const request = require('request')

const forecast = (lat, lon, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=acb0687a72f5894a0a62cdbb2d75eb4a&query=${lat},${lon}`
    request({ url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to the weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`)
        }
    })
}

module.exports = forecast