'use strict';

const User = use('App/Models/User');
const Hash = use('Hash');

class UserController {

    async store({request}) {
        const user = new User();
        user.fill(request.all());
        user.username = await Hash.make(request.input('password'));
        await user.save();

        return user;
    }

    async login({request, auth}) {
        const {email, password} = request.all();
        const tokenInfo = await auth.attempt(email, password);
        const user = await User.findBy('email', email);

        return {tokenInfo, user};
    }
}

module.exports = UserController;
