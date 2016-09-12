<?php
session_start();

if(isSet($_POST["user"])){
	$_SESSION["user"] = $_POST["user"];
	$_SESSION["email"] = $_POST["email"];
	$_SESSION["level"] = $_POST["level"];
}

if(isSet($_GET['logout'])){
	session_destroy();
	header("Location:index.php");
}

if(empty($_SESSION["user"])){
	include("login.php");
}else{
	include("logged_in.php");
}

?>