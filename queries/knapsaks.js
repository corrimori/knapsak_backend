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

// query to gets all items in a knapsak
const getAllKnapsakItems = (id) => {
  console.log('in ks items queries ++++++++++++')
  console.log('knapsak id>>', id);
  return knex('knapsak_items')
  .select('knapsaks.id as knapsakId', 'items.id as itemId', 'quantity', 'items.name as name', 'items.itemImage as itemImage')
  .join('items', 'items.id', '=', 'knapsak_items.item_id')
  .join('knapsaks', 'knapsaks.id', '=', 'knapsak_items.knapsak_id')
  .where('knapsaks.id', id)
  // (column name, val)
  .distinct()
}

// return knex('videos')
//   .select(knex.raw('videos.*, users.name as owner_name'))
//   .join('users', 'users.id', 'videos.owner_id')
//   .where('videos.id', videoId)
//   .first()

// ********************************
// need to check if already exsists in knapsak
// query to add an item to a knapsak
const addItemToKnapsak = (body) => {
  return knex('knapsak_items')
  // knapsak_items.find( updateQuantity ) else == 'undefined' -- add item
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

// query to update an item in a knapsak
const updateQuantity = (id, itemId, body) => {
  return knex('knapsak_items')
  .where('id', id)
  .where('item_id', itemId)
  .update({
    knapsak_id: id,
    item_id: body.item_id,
    quantity: body.quantity
  })
  .returning('*')
  .catch((err) => {
    console.error(err)
    knex.destroy()
    process.exit(1)
  })
}

// query to delete an item in a knapsak
const deleteItemFromKnapsak = (id) => {
  return knex('knapsak_items')
    // .where('knapsak_id', knapsakId)
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
  deleteKnapsakById,
  getAllKnapsakItems,
  addItemToKnapsak,
  updateQuantity,
  deleteItemFromKnapsak
}
