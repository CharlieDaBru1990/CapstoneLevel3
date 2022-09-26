require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()
const path = require('path')
const { logger, logEvents } = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const connectDB = require('./config/dbConn')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3500

console.log(process.env.NODE_ENV)

// 1. Connect to the database.
connectDB()

// 2. Configure the CORS middleware.
app.use(logger)
// 3. Configure the logger middleware.

app.use(cors(corsOptions))
// 4. Configure the body-parser middleware.

app.use(express.json())
// 5. Configure the cookie-parser middleware.

app.use(cookieParser())

// 1. The first line sets up the express app.
// 2. The second line sets up the static folder for the public files.
app.use('/', express.static(path.join(__dirname, 'public')))

//Routes
app.use('/', require('./routes/root'))
app.use('/auth', require('./routes/authRoutes'))
app.use('/users', require('./routes/userRoutes'))
app.use('/notes', require('./routes/noteRoutes'))

// It catches all routes and returns a 404 if the route is not found.
app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ message: '404 Not Found' })
    } else {
        res.type('txt').send('404 Not Found')
    }
})

// 1. The first line of code imports the errorHandler middleware from the express-
//     error-handler module.
// 2. The second line of code creates an instance of the errorHandler middleware.
// 3. The third line of code uses the errorHandler middleware to handle any errors
//     that occur in the application.
// 4. The fourth line of code creates an instance of the express app.
// 5. The fifth line of code creates an instance of the MongoDB connection.
// 6. The sixth line of code creates a callback function that is executed when the
//     MongoDB connection is open.
// 7. The seventh line of code creates an instance of the express app.
// 8. The eighth line of code creates a callback function that is executed when the
//     server is listening on the specified port.
app.use(errorHandler)

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})

// This code is used to log any errors that occur when connecting to the database.
mongoose.connection.on('error', err => {
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})

