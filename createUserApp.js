var app = new Vue({
	el: '#addUser',
	data:{
		successMessage: "",
		errorMessage: "",
		userDetails: {email: '', password: ''},
	},

	methods:{
		keymonitor: function(event) {
       		if(event.key == "Enter"){
         		app.checkDetails();
        	}
       	},

		checkDetails: function(){
			var userForm = app.toFormData(app.userDetails);
			axios.post('createUserPHP.php', userForm)
				.then(function(response){

					if(response.data.error){
						app.errorMessage = response.data.message;
					}
					else{ // On success user will be redirected to the ethics form page
						app.successMessage = response.data.message;
						app.userDetails = {email: '', password: ''};
						setTimeout(function(){
							window.location.href="ethics form.php";
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
