exports.up = function(knex, Promise) {
  return knex.schema.createTable('items', function(table) {
    table.increments('id').primary
    table.string('name').notNullable()
    table.text('itemImage').notNullable()
    table.timestamp(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('items')
}
