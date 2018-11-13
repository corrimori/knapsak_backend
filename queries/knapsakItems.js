const knex = require('./db')

// query to get a list of all item in a knapsak
const getAllKnapsakItems = (knapsakId) => {
  return knex('knapsak_items')
  .where('knapsak_id', knapsakId)
  .join('items', 'items.id', '=', 'knapsak_items.item_id')
  .join('knapsaks', 'knapsaks.id', '=', 'knapsak_items.knapsak_id')
  .orderBy('knapsaks.description', 'ASC')
}

// query to add an item to a knapsak
const addItemToKnapsak = (body, knapsakId) => {
  return knex('knapsak_items')
  console.log('body-addKpsk>>', body)
  .insert({
    knapsak_id: knapsak_id,
    item_id: body.item_id,
    quantity: body.quantity
  })
  .catch((err) => {
    console.error(err)
    knex.destroy()
    process.exit(1)
  })
}

// query to update an item in a knapsak
updateKnapsakItem = (body, knapsakId, id) => {
  return knex('knapsak_items')
  .where('knapsak_id', knapsakId)
  .where('id', id)
  .update({
    knapsak_id: knapsakId,
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
deleteKnapsakItem = (id, knapsakId) => {
  return knex('knapsak_items')
    .where('knapsak_id', knapsakId)
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
  getAllKnapsakItems,
  addItemToKnapsak,
  updateKnapsakItem,
  deleteKnapsakItem
}
