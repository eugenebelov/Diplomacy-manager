App.LoginController = Ember.ObjectController.extend({
	userLogged:'',
	actions: {
		createUser: function(userName) {
			var that = this;

			this.store.find('user', {name: userName})
					.then(function (user) {
					  	console.log("Found thas guy:", user.query.name);
					  	that.set('userLogged', user.query.name);

					}, function(reason) {
						user = that.store.createRecord('user', {
							name: userName,
							hasSession: true
						});
						
						that.set('userLogged', userName);

						user.save();
					});
		}
	}
});