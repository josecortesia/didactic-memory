<?php
session_start();
function consulta_bd($user,$pass){
	$login = $user;
	$password = $pass;
	$url = 'http://api.thirdeye.cl';
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL,$url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
	curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
	curl_setopt($ch, CURLOPT_USERPWD, "$login:$password");
	$result = curl_exec($ch);
	curl_close($ch);  
	echo($result);
}
consulta_bd($_GET['user'],$_GET['pass']);


