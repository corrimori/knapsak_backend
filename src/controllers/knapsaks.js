const model = require('../models/knapsaks')

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

const updateKnapsak = (req, res, next) => {
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

const deleteKnapsakById = (req, res, next) => {
  let id = req.params.id
  let promise = model.deleteKnapsakById(id)

  promise.then(result => {
    return result.error ? next(result) : res.status(204).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}

const getAllKnapsakItems = (req, res, next) => {
  console.log('all ks items controller +++++++++++++');
  console.log('req.params id>>>', req.params.id)
  let { id } = req.params
  let promise = model.getAllKnapsakItems(id)

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

const updateQuantity = (req, res, next) => {
  let id = req.params.id
  let itemId = req.params.itemId
  console.log('req.params.itemId>>>', req.params.itemId);
  let promise = model.updateQuantity(id, itemId, req.body)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}

const deleteItemFromKnapsak = (req, res, next) => {
  let id = req.params.id
  let itemId = req.params.itemId
  console.log('in delete items ... body>>>>>>', req.body)
  let promise = model.deleteItemFromKnapsak(id)

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
  deleteKnapsakById,
  getAllKnapsakItems,
  addItemToKnapsak,
  updateQuantity,
  deleteItemFromKnapsak
}
