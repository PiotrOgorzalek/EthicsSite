<?php
session_start();

$conn = new mysqli("localhost", "root", "", "ethicsdatabase");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$out = array('error' => false);

$superName = $_POST['superName']; //Sets value of superName to the value inserted from the form
$superEmail = $_POST['superEmail']; //Sets value of superEmail to the value inserted from the form
$superPass = $_POST['superPass']; //Sets value of superPass to the value inserted from the form

if($superName==''){
	$out['error'] = true;
	$out['message'] = "Name is required"; // If username is left blank this will return a message to the page
}
else if($superEmail==''){
	$out['error'] = true;
	$out['message'] = "Email is required"; // If email is left blank this will return a message to the page
}
else if($superPass==''){
	$out['error'] = true;
	$out['message'] = "Password is required"; // If password is left blank this will return a message to the page
}
else{ // If every form box has a value then run the below code
  $sql = //Sort out query to check if the details already exist within the database
         //If the details do already exist then return an error message otherwise add the data to the database and return a success message (lines of code below)

	$sql = //Sort out query to insert data into the correct table

  $out['message'] = "Entry Successful";
}



$conn->close();

header("Content-type: application/json");
echo json_encode($out);
die();


?>
