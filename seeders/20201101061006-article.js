'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'articles',
      [
        {
          title: 'John Doe',
          content: 'John Doe',
          brief:'new brief',
          category_id: 1,
          hot: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('articles', null, {})
  },
}
