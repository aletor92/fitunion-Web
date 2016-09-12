<?php
// session_start();
if($_SESSION["level"] != 2 || empty($_SESSION["user"]) ){
	session_destroy();
	header("Location: index.php");
	die();

}
print_r($_SESSION);
?>
<!doctype html>

<html lang="en">
  <head>
  <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
  <script type="text/javascript" src="js/backendless.js"></script>
  <script>
  var objId = "<?php echo $_SESSION["user"];?>";
  </script>
  <script src="js/main.js"></script>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="A front-end template that helps you build fast, modern mobile web apps.">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>FitUnion</title>

    <!-- Add to homescreen for Chrome on Android -->
    <meta name="mobile-web-app-capable" content="yes">
    <link rel="icon" sizes="192x192" href="images/android-desktop.png">

    <!-- Add to homescreen for Safari on iOS -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-title" content="Material Design Lite">
    <link rel="apple-touch-icon-precomposed" href="images/ios-desktop.png">

    <!-- Tile icon for Win8 (144x144 + tile color) -->
    <meta name="msapplication-TileImage" content="images/touch/ms-touch-icon-144x144-precomposed.png">
    <meta name="msapplication-TileColor" content="#3372DF">

    <link rel="shortcut icon" href="images/favicon.png">

    <!-- SEO: If your mobile URL is different from the desktop URL, add a canonical link to the desktop page https://developers.google.com/webmasters/smartphone-sites/feature-phones -->
    <!--
    <link rel="canonical" href="http://www.example.com/">
    -->

    <link href="https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="material.min.css">
    <link rel="stylesheet" href="styles.css">
	
	<script src="js/material.min.js"></script>
	
    <style>
	body, html { width:100% ;
    height:100% ;
    overflow:hidden ;
	}

	iframe {
	padding-left:2%;
	padding-right:2%;
	position:absolute;
    z-index:1;
    top:0px;
    left:0px;
	margin-top:64px;
	margin-left:240px;
}
    </style>
  </head>
  <body style="background:url('images/sand.png')">
   <div class="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
      <header class="demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600">
	<div class="mdl-layout__drawer-button"><i class="material-icons">menu</i></div>       
	   <div class="mdl-layout__header-row">
          <span class="mdl-layout-title" id="mTitle">Home</span>
          <div class="mdl-layout-spacer"></div>
          <!-- <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
            <label class="mdl-button mdl-js-button mdl-button--icon" for="search">
              <i class="material-icons">search</i>
            </label>
            <div class="mdl-textfield__expandable-holder">
              <input class="mdl-textfield__input" type="text" id="search">
              <label class="mdl-textfield__label" for="search">Enter your query...</label>
            </div>
          </div> -->
          <!-- <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="hdrbtn">
            <i class="material-icons">more_vert</i>
          </button> -->
          <ul class="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right" for="hdrbtn">
            <li class="mdl-menu__item">About</li>
            <li class="mdl-menu__item">Contact</li>
          </ul>
        </div>
      </header>
      <div id="divNav" class="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
        <header class="demo-drawer-header">
          <img src="images/user.jpg" class="demo-avatar">
          <div class="demo-avatar-dropdown">
            <span><?php echo $_SESSION["email"]; ?></span>
            <div class="mdl-layout-spacer"></div>
            <button id="accbtn" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
              <i class="material-icons" role="presentation">arrow_drop_down</i>
              <span class="visuallyhidden">Accounts</span>
            </button>
            <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="accbtn">
              
              <li class="mdl-menu__item" onclick="Backendless.UserService.logout();location.href='index.php?logout'"><i class="material-icons">people</i>Logout</li>
            </ul>
          </div>
        </header>
        <nav class="demo-navigation mdl-navigation mdl-color--blue-grey-800">
          <!--<a class="mdl-navigation__link" href="#" onclick="openFrame('home.php','Home')"><i class="mdl-color-text--blue-grey-400 material-icons" role=<"presentation">home</i>Home</a>-->
        <!--  <a class="mdl-navigation__link" href="#" onclick="openFrame('mie_palestre.php','Le mie palestre')"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">inbox</i>Le mie palestre</a>-->
          <a class="mdl-navigation__link" href="#" onclick="openFrame('lista_clienti.php','Lista Clienti')"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">people</i>Lista Clienti</a>
          <a class="mdl-navigation__link" href="#" onclick="openFrame('registra_clienti.php','Registra Clienti')"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">people</i>Registra Utenti</a>
          
        </nav>
      </div>
      <main class="mdl-layout__content mdl-color--grey-100" id="containerFrame">
		<iframe id="mFrame" src="" height="100%" width="100%" frameborder="0"/>
      </main>
    </div>
    
  </body>
</html>
