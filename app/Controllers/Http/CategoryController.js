'use strict';

const Category = use('App/Models/Category');

class CategoryController {
    index() {
        return Category.all();
    }
}

module.exports = CategoryController;
