'use strict';

/*
|--------------------------------------------------------------------------
| CategorySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory');
const Category = use('App/Models/Category');

class CategorySeeder {
  async run () {
      const firstCategory = new Category();
      firstCategory.title = 'JavaScript';
      await firstCategory.save();

      const secondCategory = new Category();
      secondCategory.title = 'PostgreSQL';
      await secondCategory.save();

      const thirdCategory = new Category();
      thirdCategory.title = 'PHP';
      await thirdCategory.save();

  }
}

module.exports = CategorySeeder;
