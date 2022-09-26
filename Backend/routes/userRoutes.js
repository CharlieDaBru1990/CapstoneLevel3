const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')
const verifyJWT = require('../middleware/verifyJWT')

// 1. The first line of code is importing the verifyJWT middleware. This middleware will verify that the token is valid before allowing the user to access any of the routes.
// 2. The second line of code is creating a new route. This route will be used to get all the users from the database.
// 3. The third line of code is creating a new route. This route will be used to create a new user in the database.
// 4. The fourth line of code is creating a new route. This route will be used to update a user in the database.
// 5. The fifth line of code is creating a new route. This route will be used to delete a user in the database.
router.use(verifyJWT)

router.route('/')
    .get(usersController.getAllUsers)
    .post(usersController.createNewUser)
    .patch(usersController.updateUser) //I have used 'Update' in previous tasks
    .delete(usersController.deleteUser)

    module.exports = router