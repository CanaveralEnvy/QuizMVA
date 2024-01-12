'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          theme_id: 1,
          content: 'Угадайте фильм',
          img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/3155f75f-6241-421d-bfd8-a528bb55fc98/1920x',
          right_answer: 'ярость',
          points: '10',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 1,
          content: 'Угадайте фильм',
          img: 'https://icdn.lenta.ru/images/2014/11/18/19/20141118191013355/detail_bcfc3c41770c7470ba69d5f73c60cfcf.jpg',
          right_answer: 'интерстеллар',
          points: '10',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 1,
          content: 'Угадайте фильм',
          img: 'https://s0.rbk.ru/v6_top_pics/media/img/1/69/346887357543691.webp',
          right_answer: 'основной инстинкт',
          points: '10',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
