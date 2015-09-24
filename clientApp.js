//$(document).ready(function(){
//
//
//	function randomNumber(min, max) {
//    	return Math.floor(Math.random() * (1 + max - min) + min);
//	}
//
//
//	function genProject() {
//		//Make company Name
//		var nameArray = ['Amelia', 'Doug', 'Erick', 'Manu'];
//		var coName = (NameArray[Math.floor(randomNumber(0, nameArray.length))]) + 'Co';
//
//		//Make project requirements array
//		var frontEnd = Math.floor(randomNumber(10,61));
//		var clientside = Math.floor(randomNumber(10,61));
//		var server = Math.floor(randomNumber(10,61));
//		var rtnArray = [coName, frontEnd, clientside, server];
//
//		initialPopulate()
//	} //genProject
//
//	function initialPopulate(){
//	//put up company name and project requirements
//	var header_data = "<div class='header-row'> <h1" + projArray[0] + "</h1> " +
//						"<h2> --FrontEnd------Clientside------Server--</h2>" +
//						"<h2> projArray[1] + " " + projArray[2] + " " + projArray[3] </h2></div>" +
//					  "<div class='col4-container'>"
//					  "<p class='score-append'></p><p class='worker-append'</p>" + "</div>" +
//					  "<button class='addWorker'>Add Worker</button>";
//
//	$('.append-here').append(header_data);
//
//		var scoreString ="";
//		var wName="";
//		var wFront=0;
//		var wClient=0;
//		var wServe=0;
//		var fTotal=0;
//		var cTotal=0;
//		var sTotal=0;
//		var workerString="";
//		while(fTotal*cTotal*sTotal != 0){
//			//call makeWorker -> get workerArray
//			addWorker();
//
//			})
//		}
//	} //initial-populate
//
//
//
//	function addWorker(){
//		var scoreString ="";
//		var wName="";
//		var wFront=0;
//		var wClient=0;
//		var wServe=0;
//		var workerString="";
//			//call makeWorker -> get workerArray
//			$http.get('/getWorker', function(){
//				console.log('requesting worker');
//			}).then(function(response){
//				wName = response.name;
//				wFront = response.front;
//				wClient = response.client;
//				wServe = response.serve;
//
//				fTotal += wFront;
//				cTotal += wClient;
//				sTotal += wServe;
//
//				scoreString = fTotal + " " + cTotal + " " + sTotal;
//				$('.score-append').text(scoreString);
//				workerString = "<p>" + wName + " " + wFront + "  " + wClient + " " + wServe + "</p>";
//				$('.worker-append').append(workerString);
//			})
//		}
//	 //addWorker
//	}
//}
//
//
//
//
//
//	$(".generateProject").on('click', function(){
//		console.log("saw generateProject");
//		generateProject();
//	});
//
//
//	$(".addWorker").on('click', function (){
//		console.log("saw addWorker click");
//		addWorker();
//	});
//
//
//
//
//
//
//
//
//}