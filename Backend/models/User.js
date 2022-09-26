const mongoose = require('mongoose')

// 1. The userSchema is a new mongoose.Schema object.
// 2. The username and password properties are required.
// 3. The roles property is an array of strings.
// 4. The active property is a boolean.
// 5. The default value for the roles property is ["Employee"].
// 6. The default value for the active property is true.
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    roles: {
        type: [String],
        default: ["Employee"]
    },
    active: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model('User', userSchema)