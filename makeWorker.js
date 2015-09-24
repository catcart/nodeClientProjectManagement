var wName = require('./makeName');
var wSkill = require('./makeSkill');
var wScrum = require('./makeScrum');


var makeWorker = function(){
	var name = wName();
	var skill = wSkill();
	var scrum = wScrum();

	var front = 0;
	var client = 0;
	var serve = 0;

	if (skill == 0) {front = scrum};
	if (skill == 1) {client = scrum};
	if (skill == 2) {serve = scrum};
console.log(skill +" " + scrum)
	var worker =  {};
	worker.name = name;
	worker.front = front.toString();
	worker.client = client.toString();
	worker.serve = serve.toString();

	var workerTx = JSON.stringify(worker);
	return workerTx;
};


module.exports = makeWorker;
