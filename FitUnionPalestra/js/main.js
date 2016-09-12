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
function Clienti(args) {
    args = args || {};
    // this.email = args.email || "";
    this.cognome = args.cognome || "";
    this.email = args.email || "";
    this.nome = args.nome || "";
    this.ingressi_disponibili = args.ingressi_disponibili ||0;
    this.ingressi_totali = args.ingressi_totali || 0;
    this.ownerId = args.ownerId || "";
    this.userId = args.userId || null;
}
function Users(args) {
    args = args || {};
    // this.email = args.email || "";
    this.cognome = args.cognome || "";
    this.email = args.email || "";
    this.nome = args.nome || "";
    this.objectId = args.objectId || "";
    // this.userId = args.userId || null;
}



var dataStore = Backendless.Persistence.of(Clienti);
var dataStoreUser = Backendless.Persistence.of(Users);



function addClienti(){
	
	// var palestraObject = new Palestra();
	var nomeCliente = $('#add_nomeCliente').val();
	var cognomeCliente = $('#add_cognomeCliente').val();
	var emailCliente = $('#add_emailCliente').val();
	var user = $('#add_user').val();
	
	if(nomeCliente != "" && cognomeCliente != "" && emailCliente!= "" ){
			// palestraObject.set("nome",nomePalestra);
			// palestraObject.set("telefono",telefonoPalestra);
			// palestraObject.set("via",indirizzoPalestra);
			// palestraObject.set("livello",livelloPalestra);
			// palestraObject.set("attivo",1);
			// palestraObject.set("idAdmin",user);
			// alert(nomePalestra + " " + telefonoPalestra + " " + indirizzoPalestra + " " + livelloPalestra + " " + attivoPalestra);
				var mUser = new Backendless.User();
				mUser.email = emailCliente;
				mUser.password = "fitunion";
				mUser.user_level = 3;
				mUser.name = nomeCliente;
				mUser.cognome = cognomeCliente;
				 
				try
				{
					var testUser = Backendless.UserService.register( mUser );
					// console.log(mUser);
					// console.log(testUser);
					// var userQuery = queryUsers(emailCliente);		
					if(testUser != null){
						// console.log(userQuery);
						var clienteObject = new Clienti({nome:nomeCliente, cognome:cognomeCliente , email:emailCliente, ownerId:user,ingressi_disponibili:10,userId:testUser.objectId}) ;
						// // var request = dataStore.save( palestraObject , new Backendless.Async(addSuccess,addError));
						var request = dataStore.save( clienteObject);
						alert('Cliente registrato con successo');
					}
				}
				catch( err )
				{
				 alert( "error message - " + err.message );
				 alert( "error code - " + err.statusCode );
				}
			
			// function addSuccess(){
			
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
	}else{
		alert('Inserire tutti i campi.');
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


function queryUsers(objectId){
	
	var dataQuery = {
		   condition: "objectId = '"+ objectId +"'"
	};
	return dataStoreUser.find( dataQuery ,new Backendless.Async(successUsers, error));
}

function successUsers(data){
	console.log(data.data[0].user_level);
}

function queryClienti(){
	var query = dataStore.find(new Backendless.Async(success, error));	
}

function scalaIngresso(objectId){
	var dataQuery = {
		   condition: "objectId = '"+ objectId +"'"
	};
	return dataStore.find( dataQuery ,new Backendless.Async(successIngressi, error));
}
	
function successIngressi(data){
	var user = data.data[0];
	var ingressi_disponibili = user["ingressi_disponibili"];
	if(ingressi_disponibili > 0){
		user["ingressi_disponibili"] = ingressi_disponibili-1;
		// console.log(user);
		var question = confirm("Stai scalando un ingresso all' utente con questa mail: " + user["email"] + " Continuare?")
		if(question){
			dataStore.save(user);
			 location.reload();
		}
	}else{
		alert('Ingressi terminati');
	}
}
function errorIngressi(data){console.log(data);alert("Error " + data);}
	
function success(data){ 
// console.log(data);
	var table;
	
	var arrData = data.data;
	var mArrayTable = new Array();
	for(var i in arrData){
			var user = new Array();
			user.push(arrData[i].nome);
			user.push(arrData[i].cognome);
			user.push(arrData[i].email);
			user.push(arrData[i].ingressi_disponibili);
			user.push('<a href="#" onclick="scalaIngresso(\''+arrData[i].objectId+'\')">Scala ingresso</a>');
			mArrayTable.push(user);
	}
	
	// console.log(mArrayTable);
	$(document).ready(function() {
		table = $('#table').DataTable( {
			columns: [
				{ title: "Nome" },
				{ title: "Cognome" },
				{ title: "Email" },
				{ title: "Ingressi disponibili" },
				{ title: "Scala ingresso" }
			],
			"paging":   true,
			"ordering": true,
			"info":     true,
			data: mArrayTable
		} );	
	});
	$('#table_filter').ready(function(){
		$('#table_filter').css({'float':'left','margin-left':'40%'});
	});
}

function error(data){ console.log(data);alert("Error " + data);} 


/////////////////////MAIN FILE JS ////////////////////////////