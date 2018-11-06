exports.up = function(knex, Promise) {
  return knex.schema.createTable('knapsaks', function(table) {
    table.increments('id').primary
    table.string('description').notNullable()
    table.integer('user_id').references('users.id').onDelete('CASCADE')
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('knapsaks')
}


// alternative to line 5
// knex.schema.table('users', function (table) {
//       table.integer('user_id').unsigned()
//       table.foreign('user_id').references('Items.user_id_in_items')
// })
