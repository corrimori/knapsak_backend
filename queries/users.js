const knex = require('./db')

const getAllUsers = () => {
  return knex('users')
  // return knex('users').orderBy('created_at', 'desc')
}

const getUserById = (id) => {
  return knex('users').where('id', id)
}

const createUser = (body) => {
  return knex('users')
  .insert(body).returning('*')
  .catch((err) => {
    console.error(err)
    knex.destroy()
    process.exit(1)
  })
}

updateUser = (id, body) => {
  return knex('users')
  .where('id', id)
  // .update(body)
  .update({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    password: body.password
  })
  .returning('*')
  .catch((err) => {
    console.error(err)
    knex.destroy()
    process.exit(1)
  })
}

deleteUserById = (id) => {
  return knex('users')
    .where('id', id)
    .del()
    .returning('*')
    .catch((err) => {
      console.error(err)
      knex.destroy()
      process.exit(1)
    })
}

// query to all knapsaks belonging to a user
const getAllUsersKnapsaks = (id) => {
  console.log('in user-knapsak queries...')
  return knex('knapsaks')
  .where('user_id', id)
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUserById,
  getAllUsersKnapsaks,
}
