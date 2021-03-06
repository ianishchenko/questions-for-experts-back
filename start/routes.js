'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route');

Route.on('/').render('welcome');
Route.post('login', 'UserController.login');
Route.post('register', 'UserController.store');
Route.get('logout', 'UserController.logout');
Route.group(() => {
    Route.get('experts', 'ExpertController.index');
    Route.get('experts/:id', 'ExpertController.getExpert');
    Route.get('categories', 'CategoryController.index');
    Route.get('categories/:category/experts', 'ExpertController.getExpertsByCategory');
    Route.post('questions', 'QuestionController.store');
    Route.get('users/:id/questions', 'QuestionController.getQuestionsByUser');
    Route.get('users/:id', 'UserController.show');
    Route.get('answers/:hash', 'QuestionController.getQuestionForAnswer');
    Route.post('answers', 'AnswerController.store');
    Route.put('answers/:id', 'AnswerController.change');
}).prefix('api/v1').middleware('auth');
