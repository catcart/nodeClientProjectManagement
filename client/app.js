
$(document).ready(function(){

    var scoreString ="";
    var wName="";
    var wFront=0;
    var wClient=0;
    var wServe=0;
    var fTotal=0;
    var cTotal=0;
    var sTotal=0;
    var workerString="";

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (1 + max - min) + min);
    }

    var projArray=[];

    function generateProject() {
        //Make company Name
        var nameArray = ['Amelia', 'Doug', 'Erick', 'Manu'];
        var coName = (nameArray[Math.floor(randomNumber(0, (nameArray.length)-1))]) + 'Co';

        //Make project requirements array
        var frontEnd = Math.floor(randomNumber(10,61));
        var clientside = Math.floor(randomNumber(10,61));
        var server = Math.floor(randomNumber(10,61));
         projArray = [coName, frontEnd, clientside, server];

        initialPopulate()
    } //genProject

    function initialPopulate(){
        //put up company name and project requirements
        var header_data = "<div class='header_row'> <h1>" + projArray[0] + "</h1> " +
            "<h2> --FrontEnd------Clientside------Server--</h2>" +
            "<h2>" + projArray[1] + " " + projArray[2] + " " + projArray[3] + "</h2></div>" +
        "<div class='col4_container'>" +
        "<p class='score_append'> </p> <p class='worker_append'> </p>" + "</div>" +
        "<button class='addWorker'>Assign Staff</button>";

        $('.append_here').append(header_data);


        while(fTotal*cTotal*sTotal != 0){
            //call makeWorker -> get workerArray
            addWorker();

        }
    }
 //initial-populate



function addWorker(){
    var scoreString ="";
    var wName="";
    var wFront=0;
    var wClient=0;
    var wServe=0;
    var workerString="";
    //call makeWorker -> get workerArray
    $.ajax({
        url:'/getWorker'

        //('/getWorker', function(){
        //console.log('requesting worker');
    }).done(function(response){
        response = JSON.parse(response);
        console.log(response);
        console.log("------------------data recieved---------------------");
        wName = response.name;
        console.log(wName);
        wFront =  response.front;
        wClient = response.client;
        wServe = response.serve;
        console.log(wName);

        fTotal += parseInt(wFront);
        cTotal += parseInt(wClient);
        sTotal += parseInt(wServe);

        scoreString = fTotal + " " + cTotal + " " + sTotal;

        //console.log(fTotal, cTotal, sTotal);
        $('.score_append').text(scoreString);

        //console.log(wName, wFront, wClient, wServe);
        workerString = "<p>" + wName + " " + wFront + "  " + wClient + " " + wServe + "</p>";
        $('.worker_append').append(workerString);
    }).fail(function(response){
        console.log("Uh oh");
    });
}

     //addWorker







$(".generateProject").on('click', function(){
    console.log("saw generateProject");
    generateProject();
});


$(document).on("click", ".addWorker", function(){
    console.log("saw addWorker click");
    addWorker();
});








});
















//var app = angular.module('app',[]);
//app.controller("IndexController", ['$scope', '$http', function($scope, $http){
//    $scope.cat = {};
//    $scope.cats = [];
//    var fetchCats = function(){
//        return $http.get('/cats').then(function(response){
//            if(response.status !== 200){
//                throw new Error('Failed to fetch cats from the API');
//            }
//            $scope.cat = {};
//            $scope.cats = response.data;
//            return response.data;
//        })
//    };
//    $scope.add = function(cat){
//        return $http.post('/add', cat).then(fetchCats);
//    };
//
//    fetchCats();
//}])

//console.log($("title").text());
//console.log("Hello Epsilon");