<?php
session_start();
//getting data from ethics js on complete
$txt = file_get_contents('php://input');
$id = $_SESSION['id'];
?> 
<script>alert (<?php echo $id;?>)</script>
<?php
//first char is user id 
//$id = $txt[0];
//getting rest of the string without user id
//$txt =substr($txt,1);
//get todays date
$date = date("Ymd");
//creating path to file
$path = ("applications/".$id."_".$date.".json");
//saving in folder with user id 
$myfile = fopen($path, "w") or die("Unable to open file!");


fwrite($myfile,$txt);

fclose($myfile);
?>
