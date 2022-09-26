// 1. The allowedOrigins array is defined in the allowedOrigins.js file.
// 2. The origin is the value of the Origin header in the request.
// 3. If the origin is in the allowedOrigins array, or if the origin is not defined, then the callback function is called with a null value.
// 4. If the origin is not in the allowedOrigins array, then the callback function is called with an error.
// 5. The credentials option is set to true, which means that cookies and credentials are sent with the request.
// 6. The optionsSuccessStatus option is set to 200, which means that if the request is successful, the status code will be 200.

const allowedOrigins = require('./allowedOrigins');

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    optionsSuccessStatus: 200,

}

module.exports = corsOptions;