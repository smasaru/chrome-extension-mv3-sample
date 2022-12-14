import User from './models/user.js';

const user = User.new({name: 'mshibata-background.js'});
console.log(user.greet());
