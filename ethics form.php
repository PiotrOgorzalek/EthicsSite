<?php
	session_start();
	//testing only just to coope with saving file on server 
	$_SESSION['id'] = 1;
?>

<!DOCTYPE HTML>
<!--
	Striped by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
	<head>
		<title>ENU Student Ethics Resource</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<script src="https://unpkg.com/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/survey-vue@1.8.31/survey.vue.min.js"></script>
    <link href="https://unpkg.com/survey-knockout@1.8.31/survey.min.css" type="text/css" rel="stylesheet"/>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
		<link rel="stylesheet" href="assets/css/main.css" />
	</head>
	<body class="is-preload">

		<!-- Content -->
			<div id="content">
				<div class="inner">

					<!-- Post -->
						<article class="box post post-excerpt">
							<header>
								<!--
									Note: Titles and subtitles will wrap automatically when necessary, so don't worry
									if they get too long. You can also remove the <p> entirely if you don't
									need a subtitle.
								-->
								<h2>Application for Cross-University Ethical Approval</h2>
								<p></p>
							</header>
							<p>If you require any help answering questions please refer to the FAQ as linked here - <a target="_blank" href="faq.php">FAQ</a></p>
							<div id="surveyElement" style="display:inline-block;width:100%;">
								 <survey :survey='survey'/>
							</div>
							<div id="surveyResult"></div>
						</article>

				</div>
			</div>

		<!-- Sidebar -->
			<div id="sidebar">

				<!-- Logo -->
					<h1 id="logo"><a href="index.php"><img src ="images/logo.png"></a></h1>

				<!-- Nav -->
					<nav id="nav">
						<ul>
							<li><a href="initial assessment.php">Start app process</a></li>
							<li><a href="resume application.php">Resume Application</a></li>
							<li><a href="faq.php">FAQ</a></li>
							<li><a href="staff.php">Staff</a></li>
							<li><a href="admin.php">Admin</a></li>
							<?php if(isset($_SESSION['user'])) //check if user is a user and display buttons
						    {
						    ?>
						    <li><a href="logout.php">Logout</a></li>
							<?php } else { // if user is not logged in then display these buttons?>
								<li><a href="loginPage.php">Login</a></li>
							<?php } ?>
						</ul>
					</nav>

				<!-- Copyright -->
					<ul id="copyright">
						<li>&copy; Napier University</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
					</ul>
			</div>

		<!-- Scripts -->
			<script type="text/javascript" src="./ethics form.js"></script>
			<script src="https://unpkg.com/vue@next"></script> <!-- import vue.js -->
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>

	</body>
</html>
