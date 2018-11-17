const express = require('express')
const router = express.Router()
const ctrlKnapsaks = require('../controllers/knapsaks')


// knapsaks/
router.get('/', ctrlKnapsaks.getAllKnapsaks)
router.get('/:id', ctrlKnapsaks.getKnapsakById)
router.post('/', ctrlKnapsaks.createKnapsak)
router.put('/:id', ctrlKnapsaks.updateKnapsak)
router.delete('/:id', ctrlKnapsaks.deleteKnapsakById)

// get all items in a knapsak
// ** knapsaks/1/items
router.get('/:id/items', ctrlKnapsaks.getAllKnapsakItems)
// router.get('/:id/items/:itemId', ctrlKnapsaks.getItemFromKnapsak)

// add new relation knapsak-item
router.post('/:id/items', ctrlKnapsaks.addItemToKnapsak)

// update an item qty in a knapsak
// knapsaks/1/items/1
router.put('/:id/items/:itemId', ctrlKnapsaks.updateQuantity)
// delete an item in a knapsak
// delete knapsak_item
// router.delete('/:id/items/:itemId', ctrlKnapsaks.deleteItemFromKnapsak)

// delete from knapsak_items.id
router.delete('/:id/items', ctrlKnapsaks.deleteItemFromKnapsak)


module.exports = router




//  was - knapsakItems/, changed to knapsak/1
// knapsaks/1/items
// knapsaks/(knapsakId)/items
