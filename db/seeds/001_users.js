exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          firstName: 'Harry',
          lastName: 'Potter',
          email: 'harry@gmail.com',
          password: 'hedwig'
        },
        {
          id: 2,
          firstName: 'Hermione',
          lastName: 'Granger',
          email: 'hermione@gmail.com',
          password: 'crookshanks'
        },
        {
          id: 3,
          firstName: 'Ron',
          lastName: 'Weasley',
          email: 'ronw@yahoo.com',
          password: 'pigwidgeon'
        },
        {
          id: 4,
          firstName: 'Rubeus',
          lastName: 'Hagrid',
          email: 'giant@gmail.com',
          password: 'buckbeak'
        },
        {
          id: 5,
          firstName: 'Rita',
          lastName: 'Skeeter',
          email: 'rita@dailyprophet.com',
          password: 'animagus'
        },
        {
          id: 6,
          firstName: 'Luna',
          lastName: 'Lovegood',
          email: 'luna@lovegood.com',
          password: 'ravenclaw'
        }
      ])
    })

    // reset the table that tracks the auto-incrementing number
    .then(() =>
      knex.raw(
        // `SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))`
        `SELECT setval('"users_id_seq"', (SELECT MAX("id") FROM "users"))`
      )
    )
}

// knex.raw(`SELECT setval('${tableName}_id_seq', (SELECT MAX(id) FROM ${tableName}))`
