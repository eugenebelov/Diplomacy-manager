App.LoginView = Ember.View.extend({
	templateName: "login",
	classNames: ["container"],
	actions: {
		createUser: function(param) {
			var userInput = this.$().find('#user-name-input')
			if(userInput.val() != "" && userInput.val().length > 4) {
				this.get('controller').send('createUser', userInput.val());
			}
		}
	}
});