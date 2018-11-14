const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/users')
// const ctrlTags = require('../controllers/tags')


router.get('/', ctrl.getAllUsers)
router.get('/:id', ctrl.getUserById)
router.post('/', ctrl.createUser)
router.put('/:id', ctrl.updateUser)
router.delete('/:id', ctrl.deleteUserById)

// users/1/knapsaks
// get all knapsaks belonging to a user
router.get('/:id/knapsaks', ctrl.getAllUsersKnapsaks)

module.exports = router
