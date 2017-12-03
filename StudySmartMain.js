var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


//----------------------------------------------

var currentLibrary
var numLibraries = 2;

function writeQuery(lib){
	// EXAMPLE => ?library=2&year=2017&month=11&date=18&hours=15
	var query = "?";
	var d = new Date();
	query += "library="+lib+"&";
	query += "year="+d.getFullYear()+"&";
	query += "month="+(d.getMonth()+1)+"&";
	query += "date="+d.getDate()+"&";
	query += "hours="+d.getHours();
	alert(query);
	return query;

}

//----------------------------------------------

var xhr = new XMLHttpRequest();
//var i;

function refresh(){

	//for (i = 1; i <= numLibraries; i++){
		
		var i = 2;

		var url = "https://demo-studysmart.herokuapp.com/library/activity/"+writeQuery(i);
		
		console.log(url);

		xhr.onreadystatechange = function() {
				// if (i==2){
				// 	alert("true");
				// }else{
				// 	alert("false");
				// }

				// alert(xhr.readyState + "..." + xhr.status);
				

			if (xhr.readyState == 4 && xhr.status == 200) {
				//alert("Processing!");
				//alert(xhr.responseText);
				
		        var response = JSON.parse(xhr.responseText);
		        var activity = response.overall;
		        alert(activity);
		        
		        if (i == 1){
		        	document.getElementById("powellActivity").innerHTML = activity+"%";
		        } else if (i == 2){
		        	document.getElementById("yrlActivity").innerHTML = activity+"%";
		        }
		        var d = new Date();
		        document.getElementById("refreshTime").innerHTML = "refreshed at: "+(d.getMonth()+1)+"/"+d.getDate()+"/"+d.getFullYear()+" "+d.getHours()+":"+d.getMinutes();

		        //alert("activity: "+activity);
		    }
		}

		xhr.open('GET', url , true);
		xhr.send();

		// xhr.addEventListener("readystatechange", processRequest(), false); <==== NEED THIS???
	//}
	
}
 
// function processRequest() {
// 	if (i==2){
// 			alert("true");
// 		}else{
// 			alert("false");
// 		}

// 		alert(xhr.readyState + "..." + xhr.status);
		

// 	if (xhr.readyState == 4 && xhr.status == 200) {
// 		//alert("Processing!");
// 		//alert(xhr.responseText);
		
//         var response = JSON.parse(xhr.responseText);
//         var activity = response.overall;
//         alert(activity);
//         if (i == 1){
//         	document.getElementById("powellActivity").innerHTML = activity+"%";
//         } else if (i == 2){
//         	document.getElementById("yrlActivity").innerHTML = activity+"%";
//         }

//         //alert("activity: "+activity);
//     }
// }



//----------------------------------------------


function showPowell (){

	document.getElementById ("yrl").style.display = "none";
	document.getElementById ("law").style.display = "none";
	document.getElementById ("rosenfeld").style.display = "none";

	var powell = document.getElementById ("powell");
	if (powell.style.display == "none"){
		powell.style.display = "block";
	} else{
		powell.style.display = "none";
	}
}

function showYRL (){

	document.getElementById ("powell").style.display = "none";
	document.getElementById ("law").style.display = "none";
	document.getElementById ("rosenfeld").style.display = "none";

	var yrl = document.getElementById ("yrl");
	if (yrl.style.display == "none"){
		yrl.style.display = "block";
	} else{
		yrl.style.display = "none";
	}
}

function showLaw (){

	document.getElementById ("powell").style.display = "none";
	document.getElementById ("yrl").style.display = "none";
	document.getElementById ("rosenfeld").style.display = "none";

	var law = document.getElementById ("law");
	if (law.style.display == "none"){
		law.style.display = "block";
	} else{
		law.style.display = "none";
	}
}

function showRosenfeld (){

	document.getElementById ("powell").style.display = "none";
	document.getElementById ("yrl").style.display = "none";
	document.getElementById ("law").style.display = "none";

	var rosenfeld = document.getElementById ("rosenfeld");
	if (rosenfeld.style.display == "none"){
		rosenfeld.style.display = "block";
	} else{
		rosenfeld.style.display = "none";
	}
}
