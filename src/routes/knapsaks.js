const express = require('express')
const router = express.Router()
const ctrlKnapsaks = require('../controllers/knapsaks')

// knapsaks/
router.get('/', ctrlKnapsaks.getAllKnapsaks)
router.get('/:id', ctrlKnapsaks.getKnapsakById)
router.post('/', ctrlKnapsaks.createKnapsak)
router.put('/:id', ctrlKnapsaks.updateKnapsak)
router.delete('/:id', ctrlKnapsaks.deleteKnapsakById)

//  was - knapsakItems/
// knapsaks/1/items
// knapsaks/(knapsakId)/items
// get all items in a knapsak
// ** knapsak/1/items/2

router.get('/:id/items', ctrlKnapsaks.getAllKnapsakItems)
router.post('/:id/items', ctrlKnapsaks.addItemToKnapsak)


// update an item in a knapsak
// knapsaks/1/items/1
// router.post('/:id/items/:itemId', ctrlKnapsaks.addItemToKnapsak)


// router.get('/:knapsakId/items', ctrlKnapItms.getAllKnapsakItems)
// router.post('/:knapsakId/items', ctrlKnapItms.addItemToKnapsak)

module.exports = router
