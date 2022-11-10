const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true, 
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true, 
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Emai is invalid')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password can not contain "password"!')
            }
        }
    } 
})

// const me = new User({
//    name: 'Mohsen', 
//    email: '   MOHSENPASDAR@gmail.com     ', 
//    age: 34,
//    password: 'passfdworddesss '
// })

// me.save().then(() => {
//     console.log(me);
// }).catch((error) => {
//     console.log('Error', error);
// })

const Task = mongoose.model('Task', {
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const task1 = new Task({
    description: '   fgreading    ',
})

task1.save().then(() => {
    console.log(task1);
}).catch(error => {console.log(error);})