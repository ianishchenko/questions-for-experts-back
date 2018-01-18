'use strict';

const Answer = use('App/Models/Answer');
const Question = use('App/Models/Question');

class QuestionController {
    async store({request}){
        const answer = new Answer();
        answer.fill(request.all());

        const question = await Question.find(request.input('question_id'));
        question.hash = null;
        await question.save();

        return await answer.save();
    }

    async change({request, params}){
        const answer = await Answer.find(params.id);
        answer.fill(request.all());

        await answer.save();

        return answer;
    }
}

module.exports = QuestionController;
