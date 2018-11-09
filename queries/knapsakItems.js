const knex = require('./db')

const getAllKnapsakItems = () => {
  return knex('knapsakItems')
  // return knex('knapsakItems').orderBy('created_at', 'desc')
}


const fetchOrders = (restaurantId) => {
    // return innerJoin results from orders, items, restaurants, users tables
    return knex('orders_items')
        .join('orders', 'orders.id', '=', 'orders_items.order_id')
        .join('items', 'items.id', '=', 'orders_items.item_id')
        .join('restaurants', 'restaurants.id', '=', 'orders.restaurant_id')
        .join('users', 'users.id', '=', 'orders.user_id')
        // Select certain columns and generate order report
        .select('users.name as userName','orders.id as orderId','restaurants.name as restaurantName', 'items.name as itemName', 'items.descriptions as itemDescriptions','items.price as itemPrice','orders_items.quantity as itemQuantity')
        .where('orders.restaurant_id', restaurantId)
        // Remove any duplicate data
        .distinct()

// get knapsakItems for knapsak with id
const getKnapsakItemById = (knapsakId) => {
  // return innerJoin results from knapsak, items
  return knex('knapsak_items').

  where('knapsakId', id)
}

const createKnapsakItem = (body) => {
  return knex('knapsakItems')
  .insert(body).returning('*')
  .catch((err) => {
    console.error(err)
    knex.destroy()
    process.exit(1)
  })
}

updateKnapsakItem = (id, body) => {
  return knex('knapsakItems')
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

deleteKnapsakItemById = (id) => {
  return knex('knapsakItems')
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
  getKnapsakItemById,
  createKnapsakItem,
  updateKnapsakItem,
  deleteKnapsakItemById
}
