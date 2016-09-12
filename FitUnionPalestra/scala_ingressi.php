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
<form id="formIngresso">  
<h1>Scala ingresso</h1>
 <input placeholder="Nome" id="nomeUtente" name="nome" type="text"  value="" required>
 <input placeholder="Cognome" id="congnomeUtente" name="cognome" type="text" value="" required>
 <input placeholder="Email" id="emailUtente" name="email" type="text" value="" required>
<center> <button onclick="scalaIngresso();">Scala ingresso</button><center>
</form>
</body>