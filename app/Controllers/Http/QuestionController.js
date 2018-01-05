'use strict';

const Question = use('App/Models/Question');
const {getRandomString} = require('../../Helpers/RandomStringHelper');

class QuestionController {

    async getQuestionsByUser({params}) {
        return Question.query().where('author_id', '=', params.id).fetch();
    }

    async store({request}) {
        const question = new Question();
        question.fill(request.all());
        question.hash = getRandomString(20);
        await question.save();
        return question;
    }

    async getQuestionForAnswer({params}) {
        const hash = params.hash;

        return await Question.findBy('hash', hash);
    }
}

module.exports = QuestionController;
