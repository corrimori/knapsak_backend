exports.up = function(knex, Promise) {
  return knex.schema.createTable('packingList', function(table) {
    table.increments('id').primary
    table.foreign('knapsak_id').references('knapsaks.id').onDelete('CASCADE')
    table.foreign('item_id').references('items.id').onDelete('CASCADE')
    table.integer('quantity')
    table.timestamp(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('packingList')
}
