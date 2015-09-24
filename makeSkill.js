function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

var makeSkill = function(){
    var skill = Math.floor(randomNumber(0,2));
    return skill;
};

module.exports = makeSkill;