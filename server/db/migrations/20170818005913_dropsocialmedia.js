exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.table('users', function (table) {
      table.dropColumn('facebook');
      table.dropColumn('twitter');
      table.dropColumn('instagram');
    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.table('users', function (table) {
      table.string('facebook');
      table.string('twitter');
      table.string('instagram');
    })
  ]);
};