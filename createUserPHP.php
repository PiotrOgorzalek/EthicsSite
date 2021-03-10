<?php
session_start();

$conn = new mysqli("localhost", "root", "", "ethicsdatabase");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$out = array('error' => false);

$userEmail = $_POST['email'];
$password = $_POST['password'];

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
	$emailCheck = @mysqli_query($conn,$sqlCheck);
    if (mysqli_num_rows($emailCheck))
 	   {
		$out['error'] = true;
		$out['message'] = "Email already exists in database";		
	   } 
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
