const express = require('express')
const router = express.Router()
const ctrlPkList = require('../controllers/knapsakItems')

router.get('/', ctrlPkList.getAllKnapsakItems)
router.get('/:id', ctrlPkList.getKnapsakItemById)
router.post('/', ctrlPkList.createKnapsakItem)
router.put('/:id', ctrlPkList.updateKnapsakItem)
router.delete('/:id', ctrlPkList.deleteKnapsakItemById)

module.exports = router
