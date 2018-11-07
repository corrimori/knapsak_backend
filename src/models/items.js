const itemsQuery = require('../../queries/items')

const getAllItems = () => {
  items = itemsQuery.getAllItems()

  return items.then(result => {
    return result.length < 1
      ? { error: 'error retreiving items', status: 404 }
      : result
  })
}

const getItemById = (id) => {
  console.log('in get items models #############');
  item = itemsQuery.getItemById(id)

  return item.then(result => {
    return !result
      ? { error: 'error retreiving item', status: 404 }
      : result
  })
}

// const createItem = (body) => {
//   console.log('body>>', body);
//   item = itemsQuery.createItem(body)
//
//   return item.then(result => {
//     return !result
//       ? { error: 'error creating item', status: 500 }
//       : result
//   })
// }
//
// const updateItem = (id, body) => {
//   item = itemsQuery.updateItem(id, body)
//
//   return item.then(result => {
//     return !result
//       ? { error: 'error updating item', status: 500 }
//       : result
//   })
// }
//
// const deleteItemById = (id) => {
//   item = itemsQuery.deleteItemById(id)
//
//   return item.then(result => {
//     return !result
//       ? { error: 'error deleting item', status: 500 }
//       : result
//   })
// }

module.exports = {
  getAllItems,
  getItemById
  // createItem,
  // updateItem,
  // deleteItemById
}
