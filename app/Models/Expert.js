'use strict';

const Model = use('Model');

class Expert extends Model {
    static get hidden () {
        return ['created_at','updated_at']
    }

    attachments() {
        return this.hasMany('App/Models/Attachment', 'id', 'attachments.user_id');
    }
}

module.exports = Expert;
