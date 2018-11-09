exports.up = function(knex, Promise) {
  return knex.schema.createTable('knapsakItems', table => {
    table.increments('id').primary
    table.integer('knapsak_id').notNullable()
    table.foreign('knapsak_id').references('id').inTable('knapsaks').onDelete('CASCADE')
    table.integer('item_id').notNullable()
    table.foreign('item_id').references('id').inTable('items').onDelete('CASCADE')
    table.integer('quantity')
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('knapsakItems')
}

// ERROR in console ...
// alter table "knapsaks"
// add constraint "knapsaks_user_id_foreign" foreign key ("user_id")
// references "users" ("id")
// on delete CASCADE -
//
// column "user_id" referenced in foreign key constraint does not exist


// example of knex for foreign key
//     . . .
//     table.integer('item_id').notNullable()
//     table.foreign('item_id').references('id').inTable('items').onDelete('CASCADE')
//     ALTERNATIVE IN 1 LINE =========================
//     table.integer('item_id').references('items.id').onDelete('CASCADE')

//   })
// }
