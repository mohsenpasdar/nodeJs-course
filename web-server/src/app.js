const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'weather app',
        name: 'Mohsen Pasdar'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Mohsen Pasdar'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'this is some helpful text', 
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is 15 degrees out',
        location: 'Tehran'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
})