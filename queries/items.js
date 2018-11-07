const knex = require('./db')

const getAllItems = () => {
  return knex('items')
}

const getItemById = (id) => {
  return knex('items').where('id', id)
}

const createItem = (body) => {
  return knex('items')
  .insert(body).returning('*')
  .catch((err) => {
    console.error(err)
    knex.destroy()
    process.exit(1)
  })
}

const updateItem = (id, body) => {
  return knex('items')
  .where('id', id)
  // .update(body)
  .update({
    name: body.name,
    itemImage: body.itemImage
  })
  .returning('*')
  .catch((err) => {
    console.error(err)
    knex.destroy()
    process.exit(1)
  })
}

const deleteItemById = (id) => {
  return knex('items')
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
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItemById
}
