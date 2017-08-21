
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('posts', function (table) {
      table.integer('user_id')
        .references('id')
        .inTable('users');
    })
  ]); 
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('posts', function (table) {
      table.dropColumn('user_id');
    })
  ]); 
};
