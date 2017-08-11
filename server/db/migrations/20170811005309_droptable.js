exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('posts_categories'),
    knex.schema.dropTable('categories'),
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('posts_categories', function (table) {
      table.increments('id').primary();
      table.integer('posts_id')
        .references('id')
        .inTable('posts');
      table.integer('categories_id')
        .references('id')
        .inTable('categories');
    }),
    knex.schema.createTable('categories', function (table) {
      table.increments('id').primary();
      table.string('name');
    }),
  ]);
};