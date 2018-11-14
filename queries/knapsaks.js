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

// query to get a list of all item in a knapsak
const getAllKnapsakItems = (id) => {
  console.log('in queries...')
  return knex('knapsak_items')
  .where('knapsak_id', id)
  .join('items', 'items.id', '=', 'knapsak_items.item_id')
  .join('knapsaks', 'knapsaks.id', '=', 'knapsak_items.knapsak_id')
  .orderBy('knapsaks.description', 'ASC')
}

// query to add an item to a knapsak
const addItemToKnapsak = (body) => {
  return knex('knapsak_items')
  .insert({
    knapsak_id: body.knapsak_id,
    item_id: body.item_id,
    quantity: body.quantity
  }).returning('*')
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
  deleteKnapsakById,
  getAllKnapsakItems,
  addItemToKnapsak
}
