exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.table('posts', function (table) {
      table.string('category');
    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.table('posts', function (table) {
      table.dropColumn('category');
    })
  ]);
};