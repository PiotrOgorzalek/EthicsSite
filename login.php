<?php
session_start();

$conn = new mysqli("localhost", "root", "", "ethicsdatabase"); //Connection to database

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$out = array('error' => false);

$username = $_POST['username'];
$password = $_POST['password'];

if($username==''){
	$out['error'] = true;
	$out['message'] = "Username is required"; // If username is left blank this will return a message to the page
}
else if($password==''){
	$out['error'] = true;
	$out['message'] = "Password is required"; // If password is left blank this will return a message to the page
}
else{
	$sql = "select * from users where userName='$username' and password='$password'";
	$query = $conn->query($sql);

	if($query->num_rows>0){
		$row=$query->fetch_array();
		$_SESSION['user']=$row['userId']; // Set session variable of user to the user id of a user on a successful login
		$out['message'] = "Login Successful"; // If the user is successfully logged in this will return a message to the page
	}
	else{
		$out['error'] = true;
		$out['message'] = "Login Failed. User not Found"; // If the user cannot be found this will return a message to the page
	}
}



$conn->close();

header("Content-type: application/json");
echo json_encode($out);
die();


?>
