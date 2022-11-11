const Task = require('../src/models/task')

require('../src/db/mongoose')
require('../src/models/task')

Task.findByIdAndDelete('6364340a60e1b5ad4a0e5196').then(task => {
    console.log(task);
    return Task.countDocuments({ completed: false })
}).then(result => {
    console.log(result);
}).catch(e => {
    console.log(e);
})