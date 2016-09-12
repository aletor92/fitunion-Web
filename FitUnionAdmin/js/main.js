/////////////////////MAIN FILE JS ////////////////////////////

var APPLICATION_ID = '33302DEA-225D-D0FF-FFAD-FB7BA0D4C000',
    SECRET_KEY = '85B93432-53EB-70FD-FF72-56EC551B3F00',
    VERSION = 'v1'; //default application version;
Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION); 

var calcHeight = function() {
   $('#mFrame').height($(window).height());
   $('#mFrame').width($(window).width());
 }
 
$(document).ready(function() {
   calcHeight();
}); 

$(window).resize(function() {
calcHeight();
}).load(function() {
calcHeight();
});     


function openFrame(frame,title){
	// alert(frame);
	$('#mTitle').html(title);
	var allFrame = document.getElementsByTagName('iframe');
	for(var index in allFrame){
			try{
				// allFrame[index].style.display = 'none';
				$(allFrame[index]).remove();
			}catch(e){}
	}
	var frameFrame = document.getElementById(frame) ;
	var mainFrame = document.getElementById('mFrame');
	if(frameFrame != null){
		frameFrame.style.display = 'block';
	}else{
		var newFrame = document.createElement('iframe');
		newFrame.id = frame;
		newFrame.src = frame;
		newFrame.style.width = '100%';
		newFrame.style.height = '98%';
		document.getElementById('containerFrame').appendChild(newFrame);
		
	}
}
function Palestre(args) {
    args = args || {};
    // this.email = args.email || "";
    this.latitude = args.latitude || 0.0;
    this.longitude = args.longitude || 0.0;
    this.nome = args.nome || "";
    this.telefono = args.telefono || "";
    this.level = args.level || 0;
    this.via = args.via || "";
    this.ownerId = args.ownerId || "";
    this.email = args.email || "";
}


var dataStore = Backendless.Persistence.of(Palestre);


function addPalestra(){
	
	// var palestraObject = new Palestra();
	var nomePalestra = $('#add_nomePalestra').val();
	var telefonoPalestra = $('#add_telefonoPalestra').val();
	var indirizzoPalestra = $('#add_indirizzoPalestra').val();
	var livelloPalestra = $('#add_livelloPalestra').val();
	var attivoPalestra = $('#add_attivoPalestra').val();
	var user = $('#add_user').val();
	var lat = $('#lat').val();
	var lon = $('#lon').val();
	var email = $('#add_emailPalestra').val();
	
	
	if(nomePalestra != "" || attivoPalestra != "" || livelloPalestra!= "" || telefonoPalestra!= "" || indirizzoPalestra!= "" ){
			// palestraObject.set("nome",nomePalestra);
			// palestraObject.set("telefono",telefonoPalestra);
			// palestraObject.set("via",indirizzoPalestra);
			// palestraObject.set("livello",livelloPalestra);
			// palestraObject.set("attivo",1);
			// palestraObject.set("idAdmin",user);
			// alert(nomePalestra + " " + telefonoPalestra + " " + indirizzoPalestra + " " + livelloPalestra + " " + attivoPalestra);
			
			var palestraObject = new Palestre({latitude:lat , longitude:lon , nome:nomePalestra, telefono:telefonoPalestra,via:indirizzoPalestra,level:livelloPalestra,ownerId:user,email: email}) ;
			// var request = dataStore.save( palestraObject , new Backendless.Async(addSuccess,addError));
			var request = dataStore.save( palestraObject);
			
			// function addSuccess(){
				var mUser = new Backendless.User();
				mUser.email = email;
				mUser.password = "fitunion";
				mUser.user_level = 2;
				 
				try
				{
				 Backendless.UserService.register( mUser );
				 alert('Palestra aggiunta');
				}
				catch( err )
				{
				 alert( "error message - " + err.message );
				 alert( "error code - " + err.statusCode );
				}
			// }
			
			// function addError(error){
				// // alert("Errore generico." + error);
				// // console.log(error);
			// }
			
			// palestraObject.save({
				// nome : nomePalestra,
				// telefono : telefonoPalestra,
				// via: indirizzoPalestra,
				// latitude : 0,
				// longitude : 0,
				// dataIscrizione : new Date(),
				// level : parseInt(livelloPalestra),
				// attivo : true,
				// idAdmin : user
			// },{
				// success: function(palestra){alert("Palestra Aggiunta");},
				// error:function(palestra,error){alert("Errore : " + error.message);}
			// });
	}
	// var TestObject = Parse.Object.extend("TestObject");
    // var testObject = new TestObject();
      // testObject.save({foo: "bar"}, {
      // success: function(object) {
        // $(".success").show();
      // },
      // error: function(model, error) {
        // $(".error").show();
      // }
    // });
	
	
}

function queryPalestre(user){
	
	
	// var Palestra = Parse.Object.extend("Palestre");
	// var query = new Parse.Query(Palestra);
	var query = dataStore.find(new Backendless.Async(success, error));
	// if(user != null){
		// query.equalTo("ownerId", user);	
	// }
	// query.find({
		// success: function(results) {
		// // alert("Successfully retrieved " + results.length + " scores.");
		// // Do something with the returned Parse.Object values
		
			// for (var i = 0; i < results.length; i++) {
				// var object = results[i];
				// var divRow = document.createElement('div');
				// $(divRow).css({'float':'left'});
				// divRow.className = 'row';
				// var divCol = document.createElement('div');
				// divCol.className = 'col s12 m6';
				// var divCardBody = document.createElement('div');
				// divCardBody.className = 'card blue-grey darken-1';
				// var divCardContent = document.createElement('div');
				// divCardContent.className = 'card-content white-text small';
				// var divCardTitle = document.createElement('span');
				// divCardTitle.className = 'card-title';
				// $(divCardTitle).html(object.get('nome'));
				// var divCardAddress = document.createElement('p');
				// $(divCardAddress).html(object.get('via'));
				
				// $(divCardContent).append(divCardTitle);
				// $(divCardContent).append(divCardAddress);
				// $(divRow).append(divCol);
				// $(divCol).append(divCardBody);
				// $(divCardBody).append(divCardContent);
				// $('#content').append(divRow);
			// }
		// },
		// error: function(error) {
		// alert("Error: " + error.code + " " + error.message);
		// }
// });
function success(data){ 

	// console.log(data);
	var myLatlng = {lat:41.8919300	, lng:  12.5113300};
		var map = new google.maps.Map(document.getElementById('map'), {
		  zoom: 4,
		  center: myLatlng
		});
	for (var i = 0; i < data.data.length; i++) {
		
		var object = data.data[i];
		var marker = new google.maps.Marker({
			position: getLatLng(object.latitude, object.longitude),
			map: map,
			title: object.nome
		});
		
		addInfoWindow(marker,object,map);
			
		
		
		// var divRow = document.createElement('div');
		// $(divRow).css({'float':'left'});
		// divRow.className = 'row';
		// var divCol = document.createElement('div');
		// divCol.className = 'col s12 m6';
		// var divCardBody = document.createElement('div');
		// divCardBody.className = 'card blue-grey darken-1';
		// var divCardContent = document.createElement('div');
		// divCardContent.className = 'card-content white-text small';
		// var divCardTitle = document.createElement('span');
		// divCardTitle.className = 'card-title';
		// $(divCardTitle).html(object.nome);
		// var divCardAddress = document.createElement('p');
		// $(divCardAddress).html(object.via);
		
		
		// $(divCardContent).append(divCardTitle);
		// $(divCardContent).append(divCardAddress);
		// $(divRow).append(divCol);
		// $(divCol).append(divCardBody);
		// $(divCardBody).append(divCardContent);
		// $('#content').append(divRow);
	}
} 
function error(data){ console.log(data);alert("Error");} 
}
 
function addInfoWindow(marker,object,map){
	google.maps.event.addListener(marker, "click", function () {
		var infowindow = new google.maps.InfoWindow({
			map: map,
			position:getLatLng(marker.getPosition().lat(),marker.getPosition().lng()),
			content: "<b>Nome Palestra: </b> " + object.nome + "<br><b>Indirizzo: </b>" + object.via + "<br><b>Email: </b>" + object.email
		});
	});
}
 
var getLatLng = function(lat, lng) {
		return new google.maps.LatLng(lat, lng);
	};
	
 function initMap() {
    var myLatlng = {lat:41.8919300	, lng:  12.5113300};
	
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 4,
	  center: myLatlng
	});
	var markers = {};
	// var marker = new google.maps.Marker({
	  // position: myLatlng,
	  // map: map,
	  // title: 'Click to zoom'
	// });

	
	var getMarkerUniqueId= function(lat, lng) {
		return lat + '_' + lng;
	}
	
	
	
	var addMarker = google.maps.event.addListener(map, 'click', function(e) {
		var lat = e.latLng.lat(); // lat of clicked point
		var lng = e.latLng.lng(); // lng of clicked point
		var markerId = getMarkerUniqueId(lat, lng); // an that will be used to cache this marker in markers object.
		// console.log(markers.length);
		// console.log(markers);
		
			for(var index in markers){
				console.log(markers);
				console.log(markers[index]);
				markers[index].setMap(null);
			}
		
		var marker = new google.maps.Marker({
			position: getLatLng(lat, lng),
			map: map,
			id: 'marker_' + markerId
		});
		markers[markerId] = marker; // cache marker in markers object
		$('#lat').val(lat);
		$('#lon').val(lng);
		bindMarkerEvents(marker); // bind right click event to marker
	});
	var bindMarkerEvents = function(marker) {
		google.maps.event.addListener(marker, "rightclick", function (point) {
			var markerId = getMarkerUniqueId(point.latLng.lat(), point.latLng.lng()); // get marker id by using clicked point's coordinate
			var marker = markers[markerId]; // find marker
			removeMarker(marker, markerId); // remove it
		});
	};
	var removeMarker = function(marker, markerId) {
		marker.setMap(null); // set markers setMap to null to remove it from map
		delete markers[markerId]; // delete marker instance from markers object
		$('#lat').val('');
		$('#lon').val('');
	};
}

/////////////////////MAIN FILE JS ////////////////////////////