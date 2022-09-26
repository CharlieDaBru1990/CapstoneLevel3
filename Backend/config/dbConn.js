// 1. Import the mongoose module.
// 2. Connect to the database using the mongoose.connect() method.
// 3. If the connection fails, log the error to the console.
// 4. If the connection is successful, log the success message to the console.

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI)
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB