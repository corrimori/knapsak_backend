const express = require('express')
const router = express.Router()
const ctrlItems = require('../controllers/items')

router.get('/', ctrlItems.getAllItems)
router.get('/:id', ctrlItems.getItemById)
router.post('/', ctrlItems.createItem)
router.put('/:id', ctrlItems.updateItem)
router.delete('/:id', ctrlItems.deleteItemById)


module.exports = router
