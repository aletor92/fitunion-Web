<?php
session_start();
if(empty($_SESSION["user"])){
	header("Location: index.php");
	die();
}
?>
<head>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script async defer
    src="https://maps.googleapis.com/maps/api/js?callback=initMap">
    </script>
<script type="text/javascript" src="js/backendless.js"></script>
<script type="text/javascript" src="js/main.js"></script>
<link rel="stylesheet" href="styles.css"/>
</head>
<body bgcolor="#F5F5F5">
<form id="formAddPalestra">  
<h1>Aggiungi Palestra</h1>
 <input placeholder="Nome" id="add_nomePalestra" name="nome" type="text"  value="" required>
 <input placeholder="Email" id="add_emailPalestra" name="email" type="text" value="" required>
 <input placeholder="Indirizzo" id="add_indirizzoPalestra" name="indirizzo" type="text" value="" required>
 <input placeholder="Numero di telefono" id="add_telefonoPalestra" name="telefono" type="text" value="" required>
 <input placeholder="Livello" name="livello" id="add_livelloPalestra" type="text" value="" required>
 <input type="hidden" name="attivo" id="add_attivoPalestra" value="" required>
 <input type="hidden" name="user" id="add_user" value="<?php echo $_SESSION['user'];?>" required>
 <input type="hidden" name="lat" id="lat" value="" >
 <input type="hidden" name="lon" id="lon" value="">
 <div id="map" style="width:20%;height:30%;float:left;margin-left:2%;margin-top:2%"></div>
<center> <button onclick="addPalestra();">Aggiungi</button><center>
</form>
</body>