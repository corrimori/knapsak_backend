const model = require('../models/knapsakItems')

const getAllKnapsakItems = (req, res, next) => {
  console.log('knapsak controller');
  let { knapsakId } = req.params
  let promise = model.getAllKnapsakItems(knapsakId)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}

const addItemToKnapsak = (req, res, next) => {
  console.log(req.body);
  let promise = model.addItemToKnapsak(req.body)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}

const updateKnapsakItem = (req, res, next) => {
  let id = req.params.id
  let promise = model.updateKnapsakItem(id, req.body)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}

const deleteKnapsakItem = (req, res, next) => {
  let id = req.params.id
  let promise = model.deleteKnapsakItem(id)

  promise.then(result => {
    return result.error ? next(result) : res.status(204).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}

module.exports = {
  getAllKnapsakItems,
  addItemToKnapsak,
  updateKnapsakItem,
  deleteKnapsakItem
}
