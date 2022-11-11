require('../src/db/mongoose')
const User = require('../src/models/user')

'636d26ba98da788463ce30f9'

User.findByIdAndUpdate('636d1d45f5ef90c14865ab12', {age: 1}).then(user => {
    console.log(user);
    return User.countDocuments({age: 1})
}).then(result => {
    console.log(result);
}).catch(e => {
    console.log(e);
})