<?php

function callAPI_Register($url, $data){
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL,"http://api.thirdeye.cl/users/");
curl_setopt($ch, CURLOPT_POST, TRUE);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$result = curl_exec ($ch);
http_response_code(curl_getinfo($ch, CURLINFO_HTTP_CODE));

curl_close ($ch);

echo $result;

}

callAPI_Register($_GET['url'],$_GET['data']);
?>