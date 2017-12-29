'use strict';

const Expert = use('App/Models/Expert');

class ExpertController {
    index() {
        return Expert.all();
    }

    async getExpert({params}) {
        const expert = await Expert.find(params.id);
        await expert.load('attachments');

        return expert;
    }

    getExpertsByCategory({params}) {
        const category = params.category;
        return Expert.query().where('category_id', '=', category).fetch();
    }
}

module.exports = ExpertController;
