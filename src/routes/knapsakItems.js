const express = require('express')
const router = express.Router()
const ctrlKnapItms = require('../controllers/knapsakItems')

// when knapsak with specific user_id

// request list of items in a knapsak
// router.get('/:knapsakId/items', ctrlKnapItms.getAllKnapsakItems)
// request item in a knapsak
// router.get('/:knapsakId/:id', ctrlKnapItms.getAllKnapsakItems)
// create a new item in a knapsak

// update an item qty in a knapsak
router.put('/:knapsakId/:id', ctrlKnapItms.updateKnapsakItem)
// delete an item in a knapsak
router.delete('/:knapsakId/:id', ctrlKnapItms.deleteKnapsakItem)


/*
router.put('/:id', ctrlKnapItms.updateKnapsakItem)
router.delete('/:id', ctrlKnapItms.deleteKnapsakItem)
*/

/*
/knapsacks
/knapsacks/123
/knapsacks/123/items

/knapsackitems/123

======
/items/456
/items/356/grandchildren
*/

/*
/knapsakitems/123
*/



module.exports = router
