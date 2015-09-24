function randomNumber(min, max) {
    var randomNum = Math.floor(Math.random() * (1 + max - min) + min);
    console.log(randomNum);
    return randomNum;
}

var fNameArray = ['John', 'Exene', 'DJ', 'Billy', 'Miles', 'Wayne', 'Herbie', 'Ron', 'Tony'];
var lNameArray = ['Doe', 'Cervenka', 'Bonebreak', 'Zoom', 'Davis', 'Shorter', 'Hancock', 'Carter', 'Williams'];

var createFullName = function(){
    var fName = fNameArray[Math.floor(randomNumber(0, fNameArray.length - 1))];
    var lName = lNameArray[Math.floor(randomNumber(0, fNameArray.length - 1))];
    return fName + " " + lName;
};

module.exports = createFullName;

