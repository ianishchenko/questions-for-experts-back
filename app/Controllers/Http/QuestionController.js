'use strict';

const Question = use('App/Models/Question');

class QuestionController {
  async index () {

  }

  async create () {
  }

  async store ({request}) {
    const question = new Question();
    question.fill(request.all());

    return await question.save();
  }

  async show () {
  }

  async edit () {
  }

  async update () {
  }

  async delete () {

  }
}

module.exports = QuestionController;
