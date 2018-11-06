exports.up = function(knex, Promise) {
  return knex.schema.createTable('packingList', table => {
    table.increments('id').primary
    table.integer('knapsak_id').references('knapsaks.id').onDelete('CASCADE')
    table.integer('item_id').references('items.id').onDelete('CASCADE')
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


// example of knex for foreign key
// exports.up = (knex) => {
//   return knex.schema.createTable('cocktails_ingredients', table => {
//     table.integer('cocktail_id').notNullable()
//     table.foreign('cocktail_id').references('id').inTable('cocktails')
//     table.integer('ingredient_id').notNullable()
//     table.foreign('ingredient_id').references('id').inTable('ingredients')
//   })
// }
