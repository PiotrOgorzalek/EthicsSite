var app = new Vue({ // Create a new vue app
	el: '#addSupervisor', // Look for the addSupervisor div
	data:{
		successMessage: "", // Variable called successMessage used to store the text property of the success message
		errorMessage: "", // Variable called successMessage used to store the text property of the error message
		supervisorDetails: {superName: '', superEmail: '', superPass: ''},  // Variables for the 3 boxes of the input form
	},

	methods:{
		keymonitor: function(event) {
       		if(event.key == "Enter"){  // If user presses enter key it will check their details
         		app.checkDetails();
        	}
       	},

		checkDetails: function(){
			var supervisorForm = app.toFormData(app.supervisorDetails);
			axios.post('addSupervisorPHP.php', supervisorForm) // Will send the form to addSupervisorPHP then manage the response accordingly
				.then(function(response){

					if(response.data.error){ // If there is an error then the message will display the error
						app.errorMessage = response.data.message;
					}
					else{ // Otherwise it will display a success message and redirect the user back to the admin page
						app.successMessage = response.data.message;
						app.supervisorDetails = {superName: '', superEmail: '', superPass: ''};
						setTimeout(function(){
							window.location.href="admin.php";
						},2000);
					}
				});
		},

		toFormData: function(obj){
			var form_data = new FormData();
			for(var key in obj){
				form_data.append(key, obj[key]);
			}
			return form_data;
		},

		clearMessage: function(){
			app.errorMessage = '';
			app.successMessage = '';
		}

	}
});
