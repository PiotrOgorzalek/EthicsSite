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
		<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
		<script src="https://unpkg.com/vuetable-2@next"></script>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
		<link rel="stylesheet" href="assets/css/main.css" />
		<script type="text/x-template" id="grid-template">
      <table>
        <thead>
          <tr>
            <th v-for="key in columns"
              @click="sortBy(key)"
              :class="{ active: sortKey == key }">
              {{ key | capitalize }}
              <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="entry in filteredHeroes">
            <td v-for="key in columns">
							<span v-if="key == 'Options'" v-html="entry[key]"></span>
							<span v-else>{{entry[key]}}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </script>
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
								<h2>Staff</h2>
								<p></p>
							</header>
							<div id="demo">
					      <form id="search">
					        Search <input name="query" v-model="searchQuery" />
					      </form>
					      <demo-grid
					        :heroes="gridData"
					        :columns="gridColumns"
					        :filter-key="searchQuery"
					      >
					      </demo-grid>
					    </div>

					    <script>
					      // register the grid component
					      Vue.component("demo-grid", {
					        template: "#grid-template",
					        props: {
					          heroes: Array,
					          columns: Array,
					          filterKey: String
					        },
					        data: function() {
					          var sortOrders = {};
					          this.columns.forEach(function(key) {
					            sortOrders[key] = 1;
					          });
					          return {
					            sortKey: "",
					            sortOrders: sortOrders
					          };
					        },
					        computed: {
					          filteredHeroes: function() {
					            var sortKey = this.sortKey;
					            var filterKey = this.filterKey && this.filterKey.toLowerCase();
					            var order = this.sortOrders[sortKey] || 1;
					            var heroes = this.heroes;
					            if (filterKey) {
					              heroes = heroes.filter(function(row) {
					                return Object.keys(row).some(function(key) {
					                  return (
					                    String(row[key])
					                      .toLowerCase()
					                      .indexOf(filterKey) > -1
					                  );
					                });
					              });
					            }
					            if (sortKey) {
					              heroes = heroes.slice().sort(function(a, b) {
					                a = a[sortKey];
					                b = b[sortKey];
					                return (a === b ? 0 : a > b ? 1 : -1) * order;
					              });
					            }
					            return heroes;
					          }
					        },
					        filters: {
					          capitalize: function(str) {
					            return str.charAt(0).toUpperCase() + str.slice(1);
					          }
					        },
					        methods: {
					          sortBy: function(key) {
					            this.sortKey = key;
					            this.sortOrders[key] = this.sortOrders[key] * -1;
					          }
					        }
					      });

					      var demo = new Vue({
					        el: "#demo",
					        data: {
					          searchQuery: "",
					          gridColumns: ["Researcher Name", "Email", "Project Title", "Type", "Date Requested", "Approved", "Options"],
					          gridData: [
					            { 'Researcher Name': "Andrew Joh", Email: "andrew@gmail.com", 'Project Title': "Why bees", Type: "Doctoral Student", 'Date Requested': "29/02/2021", Approved: "Yes", Options: "<form method='get' action='view application.php'><input type='submit' value='View'></form>" },
						          { 'Researcher Name': "Joseph Brown", Email: "joseph@how.youdoing.com", 'Project Title': "Be friends", Type: "Masters", 'Date Requested': "10/04/2019", Approved: "Yes", Options: "<form method='get' action='view application.php'><input type='submit' value='View'></form>" },
							        { 'Researcher Name': "Elsa Rivendale", Email: "ice@cold.uk", 'Project Title': "Why so cool", Type: "UG", 'Date Requested': "31/12/2021", Approved: "No", Options: "<form method='get' action='view application.php'><input type='submit' value='View'></form>" }
					          ]
					        }
					      });
					    </script>
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
			<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script> <!-- import vue.js -->
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>
	</body>
</html>