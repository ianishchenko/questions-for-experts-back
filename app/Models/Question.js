'use strict';

const Model = use('Model');

class Question extends Model {
    answers() {
        return this.hasMany('App/Models/Answer', 'id', 'answers.question_id');
    }
}

module.exports = Question;
