function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

var makeScrum = function(){
    var scrum = Math.floor(randomNumber(1,9)).toString();
    return scrum;
};


module.exports = makeScrum;