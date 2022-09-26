const { logEvents } = require('./logger')

// 1. It’s creating a function called errorHandler that takes in four parameters: err, req, res, and next.
// 2. It’s logging the error to the console.
// 3. It’s logging the error to a file called errLog.log.
// 4. It’s setting the status code to 500.
// 5. It’s returning a JSON response with a message and an error flag.
const errorHandler = (err, req, res, next) => {
    logEvents(`${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, 'errLog.log')
    console.log(err.stack)

    const status = res.statusCode ? res.statusCode : 500 // server error 

    res.status(status)

    res.json({ message: err.message, isError: true })
}

module.exports = errorHandler 