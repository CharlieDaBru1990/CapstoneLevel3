const jwt = require('jsonwebtoken')

// 1. It first checks if the Authorization header is present in the request. If it’s not, it returns a 401 Unauthorized response.
// 2. If the Authorization header is present, it splits the header into two parts, the first part being the word “Bearer” and the second part being the actual token.
// 3. If the Authorization header is present, but it doesn’t start with “Bearer”, it returns a 403 Forbidden response.
// 4. If the Authorization header is present, and it starts with “Bearer”, it splits the header into two parts, the first part being the word “Bearer” and the second part being the actual token.
// 5. If the Authorization header is present, and it starts with “Bearer”, it verifies the token using the secret key. If the token is invalid, it returns a 403 Forbidden response.
// 6. If the Authorization header is present, and it starts with “Bearer”, and the token is valid, it sets the req.user property to the username of the user who owns the token, and the req.roles property to the roles of the user who owns the token.
// 7. Finally, it calls the next middleware in the stack.
const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization

    if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' })
    }

    const token = authHeader.split(' ')[1]

    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.status(403).json({ message: 'Forbidden' })
            req.user = decoded.UserInfo.username
            req.roles = decoded.UserInfo.roles
            next()
        }
    )
}

module.exports = verifyJWT