'use strict';

const Answer = use('App/Models/Answer');
const Question = use('App/Models/Question');

class QuestionController {
    async store({request}){
        const answer = new Answer();
        answer.fill(request.all());

        const question = await Question.findBy('question_id', request.input('question_id'));
        question.hash = null;
        await question.save();

        return await answer.save();
    }
}

module.exports = QuestionController;
