import User from './models/user.js';

const user = User.new({name: 'background.js'});
console.log(user.greet());
