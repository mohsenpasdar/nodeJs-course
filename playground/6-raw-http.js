const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=acb0687a72f5894a0a62cdbb2d75eb4a&query=45,-75&units=f'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data += chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body);
    })

})

request.on('error', (error) => {
    console.log('An error:', error);
})

request.end()