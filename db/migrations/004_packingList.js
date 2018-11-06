exports.up = function(knex, Promise) {
  return knex.schema.createTable('packingList', table => {
    table.increments('id').primary
    table.integer('knapsak_id').references('knapsaks.id').onDelete('CASCADE')
    table.integer('item_id').references('items.id').onDelete('CASCADE')
    table.integer('quantity')
    table.timestamp(true, true)
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
