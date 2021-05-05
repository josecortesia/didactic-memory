<?php
	if (!isset($_SESSION)) {
	 	session_start();
	}
	if (!$_SESSION['autorizado']) {
		header("Location: index.php");
	}
	
	//Resetear Variables de session
	$_SESSION['autorizado'] = false;
	//Eliminar variables de session
	unset($_SESSION['autorizado']);
	header("Location: index.php");


?>