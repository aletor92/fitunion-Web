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
<script type="text/javascript" src="http://cdn.datatables.net/1.10.11/js/jquery.dataTables.min.js"></script>

<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<!--Import materialize.css-->

<link type="text/css" rel="stylesheet" href="http://cdn.datatables.net/1.10.11/css/jquery.dataTables.min.css"  />

<!--Let browser know website is optimized for mobile-->
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<script type="text/javascript" src="js/materialize.min.js"></script>
</head>
<body bgcolor="#F5F5F5" onload="queryClienti()">
<div id="content">
<table id="table" style="width:60%;margin-left:2%;margin-top:2%"></table>
</div>     