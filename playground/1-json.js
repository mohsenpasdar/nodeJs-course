fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJson = dataBuffer.toString()
const data = JSON.parse(dataJson)
data.name = 'Mohsen'
data.age = '34'

const newDataJSON = JSON.stringify(data)

fs.writeFileSync('1-json.json', newDataJSON)