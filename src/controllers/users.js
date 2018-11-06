const model = require('../models/users')

// const getAllUsers = (req, res, next) => {

const getAllUsers = (req, res, next) => {
  console.log('in get all users controller +++++++++++++++++');
  let promise = model.getAllUsers()

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}

const getUserById = (req, res, next) => {
  console.log('in get user by ID +++++++++++++++++');
  let id = req.params.id
  let promise = model.getUserById(id)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}

const createUser = (req, res, next) => {
  console.log(req.body);
  let promise = model.createUser(req.body)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}

updateUser = (req, res, next) => {
  let id = req.params.id
  let promise = model.updateUser(id, req.body)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}

deleteUserById = (req, res, next) => {
  let id = req.params.id
  let promise = model.deleteUserById(id)

  promise.then(result => {
    return result.error ? next(result) : res.status(204).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUserById
}
