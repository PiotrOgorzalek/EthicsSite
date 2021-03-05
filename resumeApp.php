<?php
session_start();

$conn = new mysqli("localhost", "root", "", "ethicsdatabase");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$out = array('error' => false);

$appID = $_POST['applicationId'];
$userID = $_POST['userId'];

if($userID==''){
	$out['error'] = true;
	$out['message'] = "Please insert your user ID";
}
else if($appID==''){
	$out['error'] = true;
	$out['message'] = "Please insert your application ID";
}
else{
	///$sql = "select * from user where username='$username' and password='$password'"; This sql query needs to grab the whole application along with the user id for validation
	$query = $conn->query($sql);

	if($query->num_rows>0){
		$row=$query->fetch_array();
		$out['message'] = "Application Successfully Retrieved";
	}
	else{
		$out['error'] = true;
		$out['message'] = "Application Retrieval Failed";
	}
}



$conn->close();

header("Content-type: application/json");
echo json_encode($out);
die();


?>
