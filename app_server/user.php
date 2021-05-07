<?php
if (!isset($_SESSION)) {
session_start();
    $ch = curl_init();
	$url = 'http://api.thirdeye.cl/users/';
	$user = 'josecortesia';
	$pass = '23fe415ad47f9fbe47d17f6c53';

   // OPTIONS:
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($ch, CURLOPT_USERPWD, "$user:$pass");

   // EXECUTE:
	$result = curl_exec($ch);
	curl_close($ch);
	//echo $result;
    $data = json_decode($result);
    $json_user = "";
	$rs = $data->results;
		foreach ($rs as $index => $users_resp) {
			$json_user = json_encode($users_resp);
		}
		echo '{"data":['.$json_user.']}';  

}
if (!$_SESSION['autorizado']) {
  header("Location: index.php");
}

