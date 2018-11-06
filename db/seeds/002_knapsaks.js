exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('knapsaks')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('knapsaks').insert([
        {
          id: 1,
          description: 'overnight at friends',
          user_id: 1
        },
        {
          id: 2,
          description: '5 day holiday',
          user_id: 2
        },
        {
          id: 3,
          description: 'weekend at grandparents',
          user_id: 6
        },
      ])
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"knapsaks_id_seq"', (SELECT MAX("id") FROM "knapsaks"))`
      )
    )
}
