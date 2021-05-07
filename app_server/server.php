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

   // EXECUTE:
	$result = curl_exec($ch);
	curl_close($ch);
	$data = json_decode($result);

    if (isset($data->detail)){//usuario invalido

		echo $result;

	}else{//usuario valido

		$rs = $data->results;
			foreach ($rs as $index => $users_resp) {
			      if ($users_resp->username === $user) 
			        $_SESSION['autorizado'] = true;
			        $_SESSION['usuario'] = $users_resp->username;
			        $_SESSION['staff'] = $users_resp->is_staff;

			}
		echo $result;
	}

}

callAPI($_GET['method'],$_GET['url'],$_GET['data'], $_GET['user'],$_GET['pass']);





}
if (!$_SESSION['autorizado']) {
  header("Location: index.php");
}

