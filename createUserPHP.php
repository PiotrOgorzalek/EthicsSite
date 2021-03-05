<?php
session_start();

$conn = new mysqli("localhost", "root", "", "ethicsdatabase");

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
  $sql = //Sort out query to check if the details already exist within the database
         //If the details do already exist then return an error message otherwise run the lines of code below

  $sql = //Sort out query to insert data into the correct table

  if ($conn->query($sql) === TRUE) { // If the insert works then run the below code to log the user in

  	$sql = "select * from users where userName='$username' and password='$password'"; //Necessary to log the user in directly after creating an account
  	$query = $conn->query($sql);

  	if($query->num_rows>0){
  		$row=$query->fetch_array();
  		$_SESSION['user']=$row['userId'];
  		$out['message'] = "Login Successful";
  	}
  }
}

$conn->close();

header("Content-type: application/json");
echo json_encode($out);
die();

?>
