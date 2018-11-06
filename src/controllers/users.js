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

// getUserById = (req, res, next) => {
//   let id = req.params.id
//   let promise = model.getUserById(id)
//
//   promise.then(result => {
//     return result.error ? next(result) : res.status(200).json(result)
//   })
//
//   promise.catch(error => {
//     next(error)
//   })
// }
//
// getUserWithNestedTags = (req, res, next) => {
//   let id = req.params.id
//   let promise = model.getUserWithNestedTags()
//   console.log('>>>>>>>in controllers function get nested tags')
//
//   promise.then(result => {
//     return result.error ? next(result) : res.status(200).json(result)
//   })
//
//   promise.catch(error => {
//     next(error)
//   })
// }
//
// createUser = (req, res, next) => {
//   console.log(req.body);
//   let promise = model.createUser(req.body)
//
//   promise.then(result => {
//     return result.error ? next(result) : res.status(200).json(result)
//   })
//
//   promise.catch(error => {
//     next(error)
//   })
// }
//
// updateUser = (req, res, next) => {
//   let id = req.params.id
//   let promise = model.updateUser(id, req.body)
//
//   promise.then(result => {
//     return result.error ? next(result) : res.status(200).json(result)
//   })
//
//   promise.catch(error => {
//     next(error)
//   })
// }
//
// deleteUserById = (req, res, next) => {
//   let id = req.params.id
//   let promise = model.deleteUserById(id)
//
//   promise.then(result => {
//     return result.error ? next(result) : res.status(204).json(result)
//   })
//
//   promise.catch(error => {
//     next(error)
//   })
// }

module.exports = {
  getAllUsers
  // getUserById,
  // getUserWithNestedTags,
  // createUser,
  // updateUser,
  // deleteUserById
}
