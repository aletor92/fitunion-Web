<?php
session_start();
if(empty($_SESSION["user"])){
	header("Location: index.php");
	die();
}
?>
<head>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script type="text/javascript" src="js/backendless.js"></script>
<script type="text/javascript" src="js/main.js"></script>
<link rel="stylesheet" href="styles.css"/>
</head>
<body bgcolor="#F5F5F5">
<form id="formRegistraCliente">  
<h1>Registra cliente</h1>
 <input placeholder="Nome" id="add_nomeCliente" name="add_nomeCliente" type="text"  value="" required>
 <input placeholder="Cognome" id="add_cognomeCliente" name="add_cognomeCliente" type="text" value="" required>
 <input placeholder="Email" id="add_emailCliente" name="add_emailCliente" type="text" value="" required>
 <input type="hidden" name="user" id="add_user" value="<?php echo $_SESSION['user'];?>" required>
<center> <button onclick="addClienti();">Registra</button><center>
</form>
</body>