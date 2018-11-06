exports.seed = (knex, Promise) => {
  return Promise.all([
    knex('packingList').insert({ knapsak_id: 1, item_id: 1, quantity: 1 }),
    knex('packingList').insert({ knapsak_id: 1, item_id: 4, quantity: 1 }),
    knex('packingList').insert({ knapsak_id: 1, item_id: 6, quantity: 1 }),
    knex('packingList').insert({ knapsak_id: 1, item_id: 13, quantity: 1 }),
    knex('packingList').insert({ knapsak_id: 2, item_id: 2, quantity: 7 }),
    knex('packingList').insert({ knapsak_id: 2, item_id: 4, quantity: 7 }),
    knex('packingList').insert({ knapsak_id: 2, item_id: 8, quantity: 1 }),
    knex('packingList').insert({ knapsak_id: 2, item_id: 6, quantity: 3 }),
    knex('packingList').insert({ knapsak_id: 2, item_id: 13, quantity: 1 }),
    knex('packingList').insert({ knapsak_id: 3, item_id: 1, quantity: 2 }),
    knex('packingList').insert({ knapsak_id: 3, item_id: 4, quantity: 2 }),
    knex('packingList').insert({ knapsak_id: 3, item_id: 3, quantity: 2 }),
    knex('packingList').insert({ knapsak_id: 3, item_id: 5, quantity: 1 }),
    knex('packingList').insert({ knapsak_id: 3, item_id: 4, quantity: 2 }),
    knex('packingList').insert({ knapsak_id: 3, item_id: 13, quantity: 1 })
  ])
}
