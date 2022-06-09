const userNames = ['Andrew', 'Jack', 'Daniel'];
function greetings(number = 0) {
    return (`Hello my dear ${userNames[number]}`);
}
module.exports = {userNames, greetings}