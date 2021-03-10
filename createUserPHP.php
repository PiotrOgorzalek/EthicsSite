<?php
session_start();

$conn = new mysqli("localhost", "root", "", "ethicsdatabase");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$out = array('error' => false);
//get values of the user input and assign them to the variables
$userEmail = $_POST['email'];
$password = $_POST['password'];
//validate user input 
if($userEmail==''){
	$out['error'] = true;
	$out['message'] = "Email is required"; // If username is left blank this will return a message to the page
}
else if($password==''){
	$out['error'] = true;
	$out['message'] = "Password is required"; // If password is left blank this will return a message to the page
}
else
{
	//check if email in the database
	$sqlCheck = "SELECT email FROM users WHERE email='$userEmail'";
	//run the query against database return 1 if found or 0 if not
	$emailCheck = @mysqli_query($conn,$sqlCheck);
	//if true return message that email already exists
    if (mysqli_num_rows($emailCheck))
 	   {
		$out['error'] = true;
		$out['message'] = "Email already exists in database";		
	   } 
	   //everything fine so run query and say to user that login is succesfull all queries need some security 
	else {
		$sql = "INSERT INTO users(email,password) VALUES ('$userEmail','$password')";
			 if ($conn->query($sql) === TRUE)
			  { // If the insert works then run the below code to log the user in
				$sql = "select * from users where email='$userEmail' and password='$password'"; //Necessary to log the user in directly after creating an account
  				$query = $conn->query($sql);

  					if($query->num_rows>0)
					  {
  						$row=$query->fetch_array();
  						$_SESSION['userId']=$row['userId'];
  						$out['message'] = "Login Successful wait for application";
					  }
  			  }
  		}
}

$conn->close();

header("Content-type: application/json");
echo json_encode($out);
die();

?>
