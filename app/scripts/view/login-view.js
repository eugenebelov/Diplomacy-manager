App.LoginView = Ember.View.extend({
	templateName: "login",
	classNames: ["container"],
	actions: {
		createUser: function(param) {
			var userInput = this.$().find('#userNameInput')
			if(userInput.val() != "" && userInput.val().length > 2) {
				this.get('controller').send('createUser', userInput.val());
			}
		}
	}
});