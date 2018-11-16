const model = require('../models/items')

const getAllItems = (req, res, next) => {
  let promise = model.getAllItems()

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}

const getItemById = (req, res, next) => {
  let id = req.params.id
  let promise = model.getItemById(id)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}

const createItem = (req, res, next) => {
  console.log(req.body);
  let promise = model.createItem(req.body)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}

const updateItem = (req, res, next) => {
  let id = req.params.id
  let promise = model.updateItem(id, req.body)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}

const deleteItemById = (req, res, next) => {
  let id = req.params.id
  let promise = model.deleteItemById(id)

  promise.then(result => {
    return result.error ? next(result) : res.status(204).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItemById
}
