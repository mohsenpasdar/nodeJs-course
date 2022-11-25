const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('The site is currently down. Chech back soon!')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})

const jwt  = require('jsonwebtoken')

const myFunction = async () => {
    const token = jwt.sign({ _id: 'zxcasd' }, 'testtest', { expiresIn: '1 seconds' })
    console.log(token);

    const data = jwt.verify(token, 'testtest')
    console.log(data);
}

myFunction()