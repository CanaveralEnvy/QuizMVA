'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Themes',
      [
        {
          name: 'Фильм по кадру',
          img: 'https://www.amsoil-club.su/img/blog/dtp/vnutre/86/newPicture0.17482119102854576.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Мемология',
          img: 'https://static.wikia.nocookie.net/drebedenboi/images/c/ce/%D0%98%D0%B4%D1%83%D1%89%D0%B8%D0%B9-%D0%BA-%D1%80%D0%B5%D0%BA%D0%B5.jpg/revision/latest?cb=20201025130940&path-prefix=ru',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};
