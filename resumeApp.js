var app = new Vue({
	el: '#application',
	data:{
		successMessage: "",
		errorMessage: "",
		application: {appID: '', userID: ''},
	},

	methods:{
		keymonitor: function(event) {
       		if(event.key == "Enter"){
         		app.checkDetails();
        	}
       	},

		checkDetails: function(){
			var appForm = app.toFormData(app.application);
			axios.post('resumeApp.php', appForm)
				.then(function(response){

					if(response.data.error){
						app.errorMessage = response.data.message;
					}
					else{
						app.successMessage = response.data.message;
						app.application = {appID: '', userID: ''};
						setTimeout(function(){
							//window.location.href="success.php"; This line should redirect to the ethics form.php page with the correct application being passed with it
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
