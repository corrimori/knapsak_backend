const knapsaksQuery = require('../../queries/knapsaks')

const getAllKnapsaks = () => {
  knapsaks = knapsaksQuery.getAllKnapsaks()

  return knapsaks.then(result => {
    return result.length < 1
      ? { error: 'error retreiving knapsaks', status: 404 }
      : result
  })
}

const getKnapsakById = (id) => {
  knapsak = knapsaksQuery.getKnapsakById(id)

  return knapsak.then(result => {
    return !result
      ? { error: 'error retreiving knapsak', status: 404 }
      : result
  })
}

const createKnapsak = (body) => {
  console.log('body>>', body);
  knapsak = knapsaksQuery.createKnapsak(body)

  return knapsak.then(result => {
    return !result
      ? { error: 'error creating knapsak', status: 500 }
      : result
  })
}

const updateKnapsak = (id, body) => {
  console.log('body>>', body);
  knapsak = knapsaksQuery.updateKnapsak(id, body)

  return knapsak.then(result => {
    return !result
      ? { error: 'error updating knapsak', status: 500 }
      : result
  })
}

const deleteKnapsakById = (id) => {
  knapsak = knapsaksQuery.deleteKnapsakById(id)

  return knapsak.then(result => {
    return !result
      ? { error: 'error deleting knapsak', status: 500 }
      : result
  })
}

const getAllKnapsakItems = (id) => {
  console.log('ks items models +++++++++++++');
  console.log('id>>', id);
  let items = knapsaksQuery.getAllKnapsakItems(id)

  return items.then(result => {
    return result.length < 1
      ? { error: 'error retreiving items', status: 404 }
      : result
  })
}

const addItemToKnapsak = (body) => {
  let item = knapsaksQuery.addItemToKnapsak(body)

  return item.then(result => {
    return !result
      ? { error: 'error creating item', status: 500 }
      : result
  })
}

const updateQuantity = (id, body) => {
  console.log('in update Quantity ...')
  let item = knapsaksQuery.updateQuantity(id, itemId, body)
  console.log('update Quantity item---->>', item);

  return item.then(result => {
    return !result
      ? { error: 'error updating item', status: 500 }
      : result
  })
}

// id from knapsak_items
const deleteItemFromKnapsak = (id) => {
  let item = knapsaksQuery.deleteItemFromKnapsak(id)

  return item.then(result => {
    return !result
      ? { error: 'error deleting item', status: 500 }
      : result
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
