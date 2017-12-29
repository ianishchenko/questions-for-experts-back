'use strict';

const Schema = use('Schema');

class ExpertsSchema extends Schema {
    up () {
        this.create('experts', (table) => {
            table.increments();
            table.string('first_name');
            table.string('last_name');
            table.string('small_description');
            table.string('email').unique();
            table.integer('category_id').unsigned();
            table.foreign('category_id').references('categories.id');
            table.timestamps();
        })
    }

    down () {
        this.drop('experts');
    }
}

module.exports = ExpertsSchema;
