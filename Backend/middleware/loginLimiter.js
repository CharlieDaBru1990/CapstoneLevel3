const rateLimit = require('express-rate-limit')
const { logEvents } = require('./logger')

// 1. It’s creating a rate limiter object.
// 2. It’s setting the rate limit window to 1 minute.
// 3. It’s setting the maximum number of requests to 5 per minute.
// 4. It’s setting the message to display when the rate limit is exceeded.
// 5. It’s setting the handler to be executed when the rate limit is exceeded.
// 6. It’s setting the standard headers to be returned.
// 7. It’s setting the legacy headers to be disabled.
const loginLimiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 5, // Limit each IP to 5 login requests per `window` per minute
    message:
        { message: 'Too many login attempts from this IP, please try again after a 60 second pause' },
    handler: (req, res, next, options) => {
        logEvents(`Too Many Requests: ${options.message.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, 'errLog.log')
        res.status(options.statusCode).send(options.message)
    },
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

module.exports = loginLimiter