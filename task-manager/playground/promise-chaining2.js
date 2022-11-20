require('../src/db/mongoose')
const Task = require('../src/models/task');

// Task.findByIdAndDelete('6364340a60e1b5ad4a0e5196').then(task => {
//     console.log(task);
//     return Task.countDocuments({ completed: false })
// }).then(result => {
//     console.log(result);
// }).catch(e => {
//     console.log(e);
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('636d23add91953495fdade42').then(count => {
    console.log(count);
}).catch(e => {
    console.log(e);
})