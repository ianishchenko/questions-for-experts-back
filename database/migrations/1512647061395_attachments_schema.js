'use strict';

const Schema = use('Schema');

class AttachmentsSchema extends Schema {
  up () {
    this.create('attachments', (table) => {
      table.increments();
      table.string('url_path').unique();
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('experts.id');
      table.boolean('is_avatar').defaultTo(false);
      table.timestamps();
    })
  }

  down () {
    this.drop('attachments');
  }
}

module.exports = AttachmentsSchema;
