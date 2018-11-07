const express = require('express')
const router = express.Router()
const ctrlKnapsaks = require('../controllers/knapsaks')

router.get('/', ctrlKnapsaks.getAllKnapsaks)
router.get('/:id', ctrlKnapsaks.getKnapsakById)
router.post('/', ctrlKnapsaks.createKnapsak)
router.put('/:id', ctrlKnapsaks.updateKnapsak)
router.delete('/:id', ctrlKnapsaks.deleteKnapsakById)

module.exports = router
