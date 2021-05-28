<?php

if (!isset($_SESSION)) {
session_start();


function callAPI_Dashboard($user,$pass){


      $device = callAPI_Device($user,$pass);
      $data_device = json_decode($device);

        if ($data_device->count > 0){
          //datos de dependiente
          $data_device->results[0]->dependant_id;
          $url_dependant = $data_device->results[0]->dependant_id;
          $dependet = callAPI_Dependent($user,$pass,$url_dependant);
          $data_dependet = json_decode($dependet);

          //datos de relation
          $url_relation = $data_dependet->relation;
          $relation = callAPI_Relations($user,$pass,$url_relation);
          $data_relation = json_decode($relation);

          $obj_merged = (object) array_merge( (array) $data_device, (array) $data_dependet, (array) $data_relation);
          //relation device dependant merge json
          $json_merged = json_encode($obj_merged);
          echo $json_merged;

        }else{

          echo $device;

        }

}

function callAPI_Relations($user,$pass,$url_relation){
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,$url_relation);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
curl_setopt($ch, CURLOPT_USERPWD, "$user:$pass");

$rs = curl_exec ($ch);
//http_response_code(curl_getinfo($ch, CURLINFO_HTTP_CODE));

curl_close ($ch);

return $rs;

}

function callAPI_Dependent($user,$pass,$url_dependant){
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,$url_dependant);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
curl_setopt($ch, CURLOPT_USERPWD, "$user:$pass");

$rs = curl_exec ($ch);
//http_response_code(curl_getinfo($ch, CURLINFO_HTTP_CODE));

curl_close ($ch);

return $rs;

}

function callAPI_Device($user,$pass){
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,"http://api.thirdeye.cl/devices/");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
curl_setopt($ch, CURLOPT_USERPWD, "$user:$pass");

$rs = curl_exec ($ch);
//http_response_code(curl_getinfo($ch, CURLINFO_HTTP_CODE));

curl_close ($ch);

return $rs;

}


function callAPI_Login($method, $url, $data, $user,$pass){
  //echo $method, $url, $data, $user,$pass;
  $ch = curl_init();

   // OPTIONS:
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
  curl_setopt($ch, CURLOPT_USERPWD, "$user:$pass");

  $result = curl_exec ($ch);
  $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
  http_response_code($httpcode);

  curl_close ($ch);


  $data_user = json_decode($result);
  
  
  

  if ($httpcode == 403){//usuario invalido
      echo $result;
  }
  if ($httpcode == 200){//usuario valido

      $rs = $data_user->results;
      foreach ($rs as $index => $users_resp) {
        if ($users_resp->username === $user) 
          $_SESSION['autorizado'] = true;
          $_SESSION['usuario'] = $users_resp->first_name;
          $_SESSION['id_representant'] = $users_resp->id;
          $_SESSION['staff'] = false;
          $_SESSION['user'] = $user;
          $_SESSION['passwd'] = $pass;
        }
      echo $result;
      
  }

}





if ($_GET['resp']==1 and isset($_GET['resp'])) {
  callAPI_Login($_GET['method'],$_GET['url'],$_GET['data'], $_GET['user'],$_GET['pass']);

}

if ($_GET['resp']==2 and isset($_GET['resp'])) {
  callAPI_Dashboard($_SESSION['user'],$_SESSION['passwd']);
}



}


