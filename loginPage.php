<?php
	session_start();
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
		<script src="https://unpkg.com/vue"></script>
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
								<h2>Login</h2>
							</header>
							<div id="login">
								<div class="col-md-4 col-md-offset-4">

									<div class="panel panel-primary">
											<div class="panel-heading"><span class="glyphicon glyphicon-lock"></span> Sign in</div>
											<div class="panel-body">
												<label>Username:</label><input type="text" class="form-control" v-model="logDetails.username" v-on:keyup="keymonitor">
												<label>Password:</label><input type="password" class="form-control" v-model="logDetails.password" v-on:keyup="keymonitor">
											</div>
											<div class="panel-footer">
												<p></p>
												<button @click="checkLogin();"><span class="glyphicon glyphicon-log-in"></span> Login</button>
												<p></p>
											</div>
									</div>

									<div class="alert alert-danger text-center" v-if="errorMessage">
										<button type="button" class="close" @click="clearMessage();"><span aria-hidden="true">&times;</span></button>
										<span class="glyphicon glyphicon-alert"></span> {{ errorMessage }}
									</div>

									<div class="alert alert-success text-center" v-if="successMessage">
										<button type="button" class="close" @click="clearMessage();"><span aria-hidden="true">&times;</span></button>
										<span class="glyphicon glyphicon-check"></span> {{ successMessage }}
									</div>

								</div>
							</div>
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
			<script src="https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js"></script>
			<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
			<script src="loginApp.js"></script>
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>

	</body>
</html>
