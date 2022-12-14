require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('636d1d45f5ef90c14865ab12', {age: 1}).then(user => {
//     console.log(user);
//     return User.countDocuments({age: 1})
// }).then(result => {
//     console.log(result);
// }).catch(e => {
//     console.log(e);
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('636d2c7f2742e2d472ccd171', 2).then(result => {
    console.log(result);
}).catch(e => {
    console.log(e);
})
