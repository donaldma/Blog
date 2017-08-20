exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.table('posts', function (table) {
      table.string('photo_url');
      table.dropColumn('user_id');
    })
  ]); 
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.table('posts', function (table) {
      table.dropColumn('photo_url');
      table.integer('user_id')
        .references('id')
        .inTable('users');
    })
  ]); 
};