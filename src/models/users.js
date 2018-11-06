const usersQuery = require('../../queries/users')

const getAllUsers = () => {
  console.log('in models getall *******************')
  users = usersQuery.getAllUsers()

  return users.then(result => {
    return result.length < 1
      ? { error: 'error retreiving users', status: 404 }
      : result
  })
}

// const getUserById = (id) => {
//   user = usersQuery.getUserById(id)
//
//   return user.then(result => {
//     return !result
//       ? { error: 'error retreiving user', status: 404 }
//       : result
//   })
// }
//
// const getuserWithNestedTags = () => {
//   users = usersQuery.getUserWithNestedTags()
//   console.log('+++++++++++++ in models function')
//
//   return user.then(result => {
//     return result.length < 1
//       ? { error: 'error retrieving user', status: 404 }
//       : result
//   })
// }
//
// const createuser = (body) => {
//   console.log('body>>', body);
//   user = usersQuery.createuser(body)
//
//   return user.then(result => {
//     return !result
//       ? { error: 'error creating user', status: 500 }
//       : result
//   })
// }
//
// const updateuser = (id, body) => {
//   user = usersQuery.updateuser(id, body)
//
//   return user.then(result => {
//     return !result
//       ? { error: 'error updating user', status: 500 }
//       : result
//   })
// }
//
// const deleteUserById = (id) => {
//   user = usersQuery.deleteUserById(id)
//
//   return user.then(result => {
//     return !result
//       ? { error: 'error deleting user', status: 500 }
//       : result
//   })
// }

module.exports = {
  getAllUsers
  // getuserById,
  // getuserWithNestedTags,
  // createuser,
  // updateuser,
  // deleteuserById
}
