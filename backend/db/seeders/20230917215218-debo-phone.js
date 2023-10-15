require('dotenv').config();

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Phones', [
      {
        name: 'Apple iPhone 11 Pro Max 256 ГБ серебристый USA',
        img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT03fZy9B-RtapXdUCekHhLoihAI1O7ebCte5S99RxdAQA-RYpESJimPoK2-b-kFM_zag0lBOzdFecGLZB71SAWirgLydS2m2BSPLsSpd4&usqp=CAE',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        name: 'Apple iPhone 11 128 ГБ желтый RUS',
        img: 'https://ishopmsk.ru/image/cache/catalog/Apple%20iPhone%2011/Apple%20iPhone%2011/Yellow%201-max-350.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        name: 'Apple iPhone 11 256 ГБ (PRODUCT)RED USA',
        img: 'https://ishopmsk.ru/image/cache/catalog/Apple%20iPhone%2011/Apple%20iPhone%2011/Red%20-max-350.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        name: 'Apple iPhone 12 mini 256GB White RUS',
        img: 'https://ishopmsk.ru/image/cache/catalog/apple12/apple%2012%20mini/apple12mini_white_1-max-350.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        name: 'Apple iPhone 12 128GB Black USA',
        img: 'https://ishopmsk.ru/image/cache/catalog/apple12/apple%2012/apple12_black_1-max-350.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        name: 'Apple iPhone 12 128GB Green USA',
        img: 'https://ishopmsk.ru/image/cache/catalog/apple12/apple%2012/apple12_green_1-max-350.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        name: 'Apple iPhone 12 64GB Red USA',
        img: 'https://ishopmsk.ru/image/cache/catalog/apple12/apple%2012/apple12_red_1-max-350.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        name: 'Apple iPhone 12 mini 256GB Blue USA',
        img: 'https://ishopmsk.ru/image/cache/catalog/apple12/apple%2012%20mini/apple12mini_blue_1-max-350.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkInsert('Users', null, {});
  },
};
