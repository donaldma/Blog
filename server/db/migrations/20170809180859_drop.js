
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('posts', function (table) {
      table.dropColumn('postDate');
    })
  ]); 
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('posts', function (table) {
      table.dateTime('postDate');
    })
  ]); 
};

