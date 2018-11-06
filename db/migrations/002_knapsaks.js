exports.up = function(knex, Promise) {
  return knex.schema.createTable('knapsaks', function(table) {
    table.increments('id').primary
    table.string('description').notNullable()
    table.foreign('user_id').references('users.id').onDelete('CASCADE')
    table.timestamp(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('knapsaks')
}
