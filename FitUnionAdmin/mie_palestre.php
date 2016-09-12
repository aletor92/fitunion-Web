<?php
session_start();
if(empty($_SESSION["user"])){
	header("Location: index.php");
	die();
}
?>
<head>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script type="text/javascript" src="http://www.parsecdn.com/js/parse-latest.js"></script>
<script type="text/javascript" src="js/main.js"></script>
<link rel="stylesheet" href="styles.css"/>
<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<!--Import materialize.css-->
<link type="text/css" rel="stylesheet" href="materialize.min.css"  media="screen,projection"/>

<!--Let browser know website is optimized for mobile-->
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<script type="text/javascript" src="js/materialize.min.js"></script>
</head>
<body bgcolor="#F5F5F5" onload="queryPalestre('<?php echo $_SESSION['user']; ?>')">
<div id="content">
<!-- // <div class="row">
		// <div class="col s12 m6">
		  // <div class="card blue-grey darken-1 ">
			// <div class="card-content white-text small">
			  // <span class="card-title">Card Title</span>
			  // <p>I am a very simple card. I am good at containing small bits of information.
			  // I am convenient because I require little markup to use effectively.</p>
			// </div>
			// <!-- <div class="card-action">
			  // <a href="#">This is a link</a>
			  // <a href="#">This is a link</a>
		// 
			// </div>
		  // </div>
		// </div>
		// </div> -->
</div>            
</body>