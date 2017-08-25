exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.table('posts', function (table) {
      table.dropIndex('id', 'post_index')
    })
  ]); 
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.table('posts', function (table) {
      table.index('id', 'post_index')
    })
  ]); 
};