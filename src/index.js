const app = require('./app')
const port = process.env.PORT

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error('Please upload a word document'))
//         }

//         cb(undefined, true)
//         // cb(new Error('File must be a pdf'))
//         // cb(undefined, true)
//         // cb(undefined, false)
//     }
// })

// const errorMiddleware = (req, res, next) => {
//     throw new Error('From my middleware')
// }

// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({ error: error.message})
// })




// POPULATE EXAMPLE
// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('5f37ab9f3c7b0c3b68ae51c3')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('5f37aaf390b6fb37e43ea30e')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)


//  }

//  main()

// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')


// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123'}, 'thisismynewcourse', { expiresIn: '1 hour'})

//     console.log(token)

//     const data = jwt.verify(token, 'thisismynewcourse')

//     console.log(data)

//     // const password = 'Red1234!'
//     // const hashedPassword = await bcrypt.hash(password, 8)

//     // console.log(password)
//     // console.log(hashedPassword)

//     // const isMatch = await bcrypt.compare("red1234!", hashedPassword)
//     // console.log(isMatch)
// }

// myFunction()