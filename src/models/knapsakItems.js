const itemsQuery = require('../../queries/items')

const getAllKnapsakItems = () => {
  items = itemsQuery.getAllKnapsakItems()

  return items.then(result => {
    return result.length < 1
      ? { error: 'error retreiving items', status: 404 }
      : result
  })
}

const getKnapsakItemById = (id) => {
  console.log('in get knapsak-items models #############');
  item = itemsQuery.getKnapsakItemById(id)

  return item.then(result => {
    return !result
      ? { error: 'error retreiving item', status: 404 }
      : result
  })
}

const createKnapsakItem = (body) => {
  item = itemsQuery.createKnapsakItem(body)

  return item.then(result => {
    return !result
      ? { error: 'error creating item', status: 500 }
      : result
  })
}

const updateKnapsakItem = (id, body) => {
  item = itemsQuery.updateKnapsakItem(id, body)

  return item.then(result => {
    return !result
      ? { error: 'error updating item', status: 500 }
      : result
  })
}

const deleteKnapsakItemById = (id) => {
  item = itemsQuery.deleteKnapsakItemById(id)

  return item.then(result => {
    return !result
      ? { error: 'error deleting item', status: 500 }
      : result
  })
}

module.exports = {
  getAllKnapsakItems,
  getKnapsakItemById,
  createKnapsakItem,
  updateKnapsakItem,
  deleteKnapsakItemById
}
