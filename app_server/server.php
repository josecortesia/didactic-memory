<?php

if (!isset($_SESSION)) {
session_start();
function callAPI($method, $url, $data, $user,$pass){
  //echo $method, $url, $data, $user,$pass;
  $ch = curl_init();
   switch ($method){
      case "POST":
         curl_setopt($ch, CURLOPT_POST, 1);
         if ($data)
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
         break;
      case "PUT":
         curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");
         if ($data)
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data);                
         break;
      default:
         $url;
  }
   // OPTIONS:
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
  curl_setopt($ch, CURLOPT_USERPWD, "$user:$pass");
  $httpcode = http_response_code(curl_getinfo($ch, CURLINFO_HTTP_CODE));
  
   // EXECUTE:
  $result = curl_exec($ch);
  curl_close($ch);
  
  $data = json_decode($result);

  
  if ($httpcode == 403){//usuario invalido
      echo $result;
  }
  if ($httpcode == 200){//usuario valido
    $rs = $data->results;
      foreach ($rs as $index => $users_resp) {
        if ($users_resp->username === $user) 
          $_SESSION['autorizado'] = true;
          $_SESSION['usuario'] = $users_resp->first_name;
          $_SESSION['staff'] = false;
    }
    echo $result;
  }

}



callAPI($_GET['method'],$_GET['url'],$_GET['data'], $_GET['user'],$_GET['pass']);



}


