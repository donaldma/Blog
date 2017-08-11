exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.table('users', function (table) {
      table.timestamps(true, true);
    }),
    knex.schema.table('posts', function (table) {
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.table('users', function (table) {
      table.dropColumn('created_at');
      table.dropColumn('updated_at');
    }),
    knex.schema.table('posts', function (table) {
      table.dropColumn('created_at');
      table.dropColumn('updated_at');
    })
  ]);
};