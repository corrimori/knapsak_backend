exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id').primary
    table.string('firstName').notNullable()
    table.string('lastName').notNullable()
    table.string('email').notNullable()
    table.text('password').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
}


=========================


exports.up = function(knex, Promise) {
  return knex.schema.createTable('knapsaks', function(table) {
    table.increments('id').primary
    table.string('description').notNullable()
    table.foreign('user_id').references('users.id').onDelete('CASCADE')
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('knapsaks')
}


=====================


exports.up = function(knex, Promise) {
  return knex.schema.createTable('items', function(table) {
    table.increments('id').primary
    table.string('name').notNullable()
    table.text('itemImage').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('items')
}


=======================


exports.up = function(knex, Promise) {
  return knex.schema.createTable('packingList', table => {
    table.increments('id').primary
    table.foreign('knapsak_id').references('knapsaks.id').onDelete('CASCADE')
    table.foreign('item_id').references('items.id').onDelete('CASCADE')
    table.integer('quantity')
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('packingList')
}

//
// alter table "knapsaks"
//
// add constraint "knapsaks_user_id_foreign" foreign key ("user_id")
// references "users" ("id")
// on delete CASCADE -
//
// column "user_id" referenced in foreign key constraint does not exist


==============================

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
      const tablename = 'users'
      knex.raw(
        `SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))`
      )
    )
}

// knex.raw(`SELECT setval('${tableName}_id_seq', (SELECT MAX(id) FROM ${tableName}))`


=============================


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


==================================


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('items').insert([
        {
          id: 1,
          name: 'boy_undies',
          itemImage: 'boy_undies.jpg'
        },
        {
          id: 2,
          name: 'girl_undies',
          itemImage: 'girl_undies.jpg'
        },
        {
          id: 3,
          name: 'socks',
          itemImage: 'socks.jpg'
        },
        {
          id: 4,
          name: 'tshirt',
          itemImage: 'tshirt.jpg'
        },
        {
          id: 5,
          name: 'longsleeve',
          itemImage: 'longsleeve.jpg'
        },
        {
          id: 6,
          name: 'shorts',
          itemImage: 'shorts.jpg'
        },
        {
          id: 7,
          name: 'pants',
          itemImage: 'pants.jpg'
        },
        {
          id: 8,
          name: 'skirt',
          itemImage: 'skirt.jpg'
        },
        {
          id: 9,
          name: 'jacket',
          itemImage: 'jacket.jpg'
        },
        {
          id: 10,
          name: 'shoes',
          itemImage: 'shoes.jpg'
        },
        {
          id: 11,
          name: 'boy_swimsuit',
          itemImage: 'boy_swimsuit.jpg'
        },
        {
          id: 12,
          name: 'girl_swimsuit',
          itemImage: 'girl_swimsuit.jpg'
        },
        {
          id: 13,
          name: 'toothbrush',
          itemImage: 'toothbrush.jpg'
        }
      ])
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"items_id_seq"', (SELECT MAX("id") FROM "items"))`
      )
    )
}


==========================


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
