const knex = require('./db')

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
  updateKnapsakItem,
  deleteKnapsakItem
}
