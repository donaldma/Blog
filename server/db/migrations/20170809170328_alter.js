exports.up = function (knex, Promise) {
  return Promise.all([knex.schema.table('posts', function (table) {
    table.dropColumn('body');
    table.text('content');
  })])
};

exports.down = function (knex, Promise) {
  return Promise.all([knex.schema.table('posts', function (table) {
    table.string('body');
    table.dropColumn('content');
  })])
};