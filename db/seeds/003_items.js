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
