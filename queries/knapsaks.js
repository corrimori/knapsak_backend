const knex = require('./db')

const getAllKnapsaks = () => {
  return knex('knapsaks')
  // return knex('knapsaks').orderBy('created_at', 'desc')
}

const getKnapsakById = (id) => {
  return knex('knapsaks').where('id', id)
}

const createKnapsak = (body) => {
  return knex('knapsaks')
  .insert(body).returning('*')
  .catch((err) => {
    console.error(err)
    knex.destroy()
    process.exit(1)
  })
}

updateKnapsak = (id, body) => {
  return knex('knapsaks')
  .where('id', id)
  // .update(body)
  .update({
    description: body.description,
    user_id: body.user_id
  })
  .returning('*')
  .catch((err) => {
    console.error(err)
    knex.destroy()
    process.exit(1)
  })
}

deleteKnapsakById = (id) => {
  return knex('knapsaks')
    .where('id', id)
    .del()
    .returning('*')
    .catch((err) => {
      console.error(err)
      knex.destroy()
      process.exit(1)
    })
}

module.exports = {
  getAllKnapsaks,
  getKnapsakById,
  createKnapsak,
  updateKnapsak,
  deleteKnapsakById
}
