const model = require('../models/knapsaks')

// const getAllKnapsaks = (req, res, next) => {

const getAllKnapsaks = (req, res, next) => {
  let promise = model.getAllKnapsaks()

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}

const getKnapsakById = (req, res, next) => {
  let id = req.params.id
  let promise = model.getKnapsakById(id)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}

const createKnapsak = (req, res, next) => {
  console.log(req.body);
  let promise = model.createKnapsak(req.body)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}

updateKnapsak = (req, res, next) => {
  let id = req.params.id
  let promise = model.updateKnapsak(id, req.body)
  console.log('knapsak body>>', body);

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}

deleteKnapsakById = (req, res, next) => {
  let id = req.params.id
  let promise = model.deleteKnapsakById(id)

  promise.then(result => {
    return result.error ? next(result) : res.status(204).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}

module.exports = {
  getAllKnapsaks,
  getKnapsakById,
  createKnapsak,
  updateKnapsak,
  deleteKnapsakById
}
