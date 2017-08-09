exports.up = function (knex, Promise) {

  return Promise.all([

    knex.schema.createTable('users', function (table) {
      table.increments('id').primary();
      table.string('email');
      table.string('password');
      table.string('name');
      table.string('avatar_url');
      table.string('facebook');
      table.string('twitter');
      table.string('instagram');
      table.text('about');
      table.timestamps();
    }),

    knex.schema.createTable('posts', function (table) {
      table.increments('id').primary();
      table.string('title');
      table.string('body');
      table.integer('user_id')
        .references('id')
        .inTable('users');
      table.dateTime('postDate');
    }),

    knex.schema.createTable('categories', function (table) {
      table.increments('id').primary();
      table.string('name');
    }),

    knex.schema.createTable('posts_categories', function (table) {
      table.increments('id').primary();
      table.integer('posts_id')
        .references('id')
        .inTable('posts');
      table.integer('categories_id')
        .references('id')
        .inTable('categories');
    })
  ])
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users'),
    knex.schema.dropTable('posts'),
    knex.schema.dropTable('categories'),
    knex.schema.dropTable('posts_categories')
  ])
};