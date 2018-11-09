const model = require('../models/knapsakItems')

const getAllKnapsakItems = (req, res, next) => {
  let promise = model.getAllKnapsakItems()

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}

const getKnapsakItemById = (req, res, next) => {
  console.log('in get knapsakItems controllers+++++++++++++');
  let id = req.params.id
  let promise = model.getKnapsakItemById(id)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}

const createKnapsakItem = (req, res, next) => {
  console.log(req.body);
  let promise = model.createKnapsakItem(req.body)

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

const deleteKnapsakItemById = (req, res, next) => {
  let id = req.params.id
  let promise = model.deleteKnapsakItemById(id)

  promise.then(result => {
    return result.error ? next(result) : res.status(204).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}

module.exports = {
  getAllKnapsakItems,
  getKnapsakItemById,
  createKnapsakItem,
  updateKnapsakItem,
  deleteKnapsakItemById
}
