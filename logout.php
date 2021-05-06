<?php
	if (!isset($_SESSION)) {
	 	session_start();
	}
	if (!$_SESSION['autorizado']) {
		header("Location: index.php");
	}
	
	//Resetear Variables de session
	$_SESSION['autorizado'] = false;
	$_SESSION['usuario'] = false;
	//Eliminar variables de session
	unset($_SESSION['autorizado']);
	unset($_SESSION['usuario']);
	header("Location: index.php");


?>