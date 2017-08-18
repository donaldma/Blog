require('dotenv').config({silent: true})
const bcrypt = require("bcrypt");

exports.seed = function (knex, Promise) {
  function insertUser(email, password, name, avatar_url, about) {
    return knex('users').insert({
      email,
      password: bcrypt.hashSync(password, 10),
      name,
      avatar_url,
      about
    }).returning('id');
  }

  return knex('users').del()
    .then(function () {
      return Promise.all([
        insertUser(
          'gabriellagloria_@hotmail.com',
          process.env.PASSWORD,
          'Gabriella Gloria',
          'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/19030332_10158810180885015_8846965102926078985_n.jpg?oh=634fa93c00c1aa983896c5f7e820b8bd&oe=59F10855',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut mattis tortor, et fermentum turpis. Nam ut nisi non mi finibus aliquam in a lectus. In in metus pellentesque, iaculis orci at, maximus risus. Vivamus non dolor ut ante pulvinar suscipit. Sed sit amet turpis est. Vivamus neque sem, viverra quis malesuada aliquam, dapibus quis massa. Nunc pulvinar efficitur ex ac malesuada. Nunc dolor mauris, dapibus ac sapien at, cursus vulputate nunc. Nunc fringilla quam nec risus viverra viverra. Duis consequat odio odio, feugiat mollis lectus molestie at. Nullam vulputate dui at cursus sodales. Duis id fermentum purus, et lobortis lacus. Donec pellentesque, diam eu fringilla porttitor, felis velit elementum sapien, in egestas nibh tortor in elit. Fusce mattis dolor vehicula enim congue, nec bibendum sem vestibulum.')
      ]);
    });
}