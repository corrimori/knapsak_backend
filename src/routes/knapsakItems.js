const express = require('express')
const router = express.Router()
const ctrlKnapItms = require('../controllers/knapsakItems')

// knapsakItems/1/1
// update an item qty in a knapsak
// router.put('/:knapsakId/:id', ctrlKnapItms.updateQuanity)
// // delete an item in a knapsak
// router.delete('/:knapsakId/:id', ctrlKnapItms.deleteItemFromKnapsak)


module.exports = router



// knapsaks/
// knapsakitems/1/1
// when knapsak with specific user_id
// request list of items in a knapsak
// router.get('/:knapsakId/items', ctrlKnapItms.getAllKnapsakItems)
// request item in a knapsak
// router.get('/:knapsakId/:id', ctrlKnapItms.getAllKnapsakItems)
// create a new item in a knapsak
