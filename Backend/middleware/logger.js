const { format } = require('date-fns');
const { v4: uuid } = require('uuid');
const fs = require('fs');
const fsPromises = require('fs').promises
const path = require('path');

// 1. It uses the `uuid()` function to generate a unique identifier for each log entry.
// 2. It uses the `format()` function to format the date and time for each log entry.
// 3. It uses the `fsPromises.mkdir()` function to create a directory called `logs` if it doesn’t already exist.
// 4. It uses the `fsPromises.appendFile()` function to append the log entry to the `logs/events.log` file.
const logEvents = async (message, logFileName) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`

    try {
        if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, '..', 'logs'))
        }
        await fsPromises.appendFile(path.join(__dirname, '..', 'logs', logFileName), logItem)
    }catch (err) {
        console.log(err)
    }
}

const logger =  (req, res,next) => {
    logEvents(`${req.method}\t&{req.url}\t${req.headers.origin}`, 'reqLog.log')
    console.log(`${req.method} ${req.path}`)
    next()
}

module.exports = { logEvents, logger }