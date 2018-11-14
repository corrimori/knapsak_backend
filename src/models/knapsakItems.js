const ksItmQuery = require('../../queries/knapsakItems')

const updateKnapsakItem = (id, body) => {
  item = ksItmQuery.updateKnapsakItem(id, body)

  return item.then(result => {
    return !result
      ? { error: 'error updating item', status: 500 }
      : result
  })
}

const deleteKnapsakItem = (id) => {
  item = ksItmQuery.deleteKnapsakItem(id)

  return item.then(result => {
    return !result
      ? { error: 'error deleting item', status: 500 }
      : result
  })
}

module.exports = {
  updateKnapsakItem,
  deleteKnapsakItem
}
