<?php

if (!isset($_SESSION)) {
session_start();


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
        }
      echo $result;

      $device = callAPI_Device($user,$pass);
      $data_device = json_decode($device);


        if ($data_device->count > 0){

          $rs = $data_device->results;
          foreach ($rs as $index => $users_device) {
              ////datos del dispositivo para las sesiones
              echo  $users_device->model;
              echo  $users_device->battery;
              echo  $users_device->latitide;
              echo  $users_device->longitude;
              echo  $users_device->last_activity;
              echo  $users_device->dependant_id;
              echo  $users_device->user_id;


              $url_dependant = $users_device->dependant_id;
              $dependet = callAPI_Dependent($user,$pass,$url_dependant);
              $data_dependet = json_decode($dependet);

              ////datos del apoderado para las sesiones
              echo  $data_dependet->name;
              echo  $data_dependet->birthdate;
              echo  $data_dependet->responsible;
              

              $url_relation = $data_dependet->relation;
              $relation = callAPI_Relations($user,$pass,$url_relation);
              $data_relation = json_decode($relation);

              ////datos de las relaciones
              echo  $data_relation->url;
              echo  $data_relation->relation;
              echo  $data_relation->description;




          }
          echo  $data_device->count;
        }else{

          echo   $data_device->count;

        }
      



      
  }

}






callAPI_Login($_GET['method'],$_GET['url'],$_GET['data'], $_GET['user'],$_GET['pass']);



}


