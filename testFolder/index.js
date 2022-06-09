// Here will be imported all files end export as a backgroundBlendMode

// const { userNames, greetings } = require('./greetings');
// const userOne = greetings(0);
// const userTwo = greetings(1);

const userOne = require('./greetings').greetings(0);
const userTwo = require('./greetings').greetings(1);
module.exports = { userOne, userTwo };// пробую добавить строку в файл