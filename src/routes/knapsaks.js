const express = require('express')
const router = express.Router()
const ctrlKnapsaks = require('../controllers/knapsaks')
const ctrlKnapItms = require('../controllers/knapsakItems')

router.get('/', ctrlKnapsaks.getAllKnapsaks)
router.get('/:id', ctrlKnapsaks.getKnapsakById)
router.post('/', ctrlKnapsaks.createKnapsak)
router.put('/:id', ctrlKnapsaks.updateKnapsak)
router.delete('/:id', ctrlKnapsaks.deleteKnapsakById)

router.get('/:knapsakId/items', ctrlKnapItms.getAllKnapsakItems)
router.post('/:knapsakId/items', ctrlKnapItms.addItemToKnapsak)

module.exports = router
