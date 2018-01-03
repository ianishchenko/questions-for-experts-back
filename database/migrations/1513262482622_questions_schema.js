'use strict';

const Schema = use('Schema');

class QuestionsSchema extends Schema {
  up () {
    this.create('questions', (table) => {
      table.increments();
      table.string('text');
      table.string('hash');
      table.integer('category_id').unsigned();
      table.foreign('category_id').references('categories.id');
      table.integer('expert_id').unsigned();
      table.foreign('expert_id').references('experts.id').onDelete('CASCADE');
      table.integer('author_id').unsigned();
      table.foreign('author_id').references('users.id').onDelete('CASCADE');
      table.timestamps();
    })
  }

  down () {
    this.drop('questions')
  }
}

module.exports = QuestionsSchema;
