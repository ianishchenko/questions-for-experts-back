'use strict';

const Factory = use('Factory');
const Expert = use('App/Models/Expert');

class ExpertSeeder {
  async run () {
    const firstExpert = new Expert();
    firstExpert.first_name = 'Alex';
    firstExpert.last_name = 'Gufovskiy';
    firstExpert.small_description = 'Some small description for first expert';
    firstExpert.email = 'email1@gmail.com';
    firstExpert.category_id = 2;
    await firstExpert.save();

    const secondExpert = new Expert();
    secondExpert.first_name = 'Max';
    secondExpert.last_name = 'Garr';
    secondExpert.small_description = 'Some small description for second expert';
    secondExpert.email = 'email2@gmail.com';
    secondExpert.category_id = 2;
    await secondExpert.save();

    const thirdExpert = new Expert();
    thirdExpert.first_name = 'Nik';
    thirdExpert.last_name = 'Cherry';
    thirdExpert.small_description = 'Some small description for third expert';
    thirdExpert.email = 'email3@gmail.com';
    thirdExpert.category_id = 3;
    await thirdExpert.save();

    const foughtExpert = new Expert();
    foughtExpert.first_name = 'Valery';
    foughtExpert.last_name = 'Craft';
    foughtExpert.small_description = 'Some small description for fought expert';
    foughtExpert.email = 'email4@gmail.com';
    foughtExpert.category_id = 4;
    await foughtExpert.save();
  }
}

module.exports = ExpertSeeder;
