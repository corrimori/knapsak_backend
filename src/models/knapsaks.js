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

module.exports = {
  getAllKnapsaks,
  getKnapsakById,
  createKnapsak,
  updateKnapsak,
  deleteKnapsakById
}
