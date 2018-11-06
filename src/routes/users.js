const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/users')
// const ctrlTags = require('../controllers/tags')

router.get('/', ctrl.getAllUsers)
// router.get('/:id', ctrl.getUserById)
// router.get('/:id/all', ctrl.getUserWithNestedTags)
// router.post('/', ctrl.createUser)
// router.put('/:id', ctrl.updateUser)
// router.delete('/:id', ctrl.deleteUserById)

module.exports = router
