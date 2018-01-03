'use strict';

const Schema = use('Schema');

class AnswersSchema extends Schema {
  up () {
    this.create('answers', (table) => {
      table.increments();
      table.timestamps();
      table.string('text');
        table.integer('question_id').unsigned();
        table.foreign('question_id').references('questions.id').onDelete('CASCADE');
    })
  }

  down () {
    this.drop('answers');
  }
}

module.exports = AnswersSchema;
