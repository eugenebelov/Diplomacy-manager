'use strict';

App.Router.map(function() {
	this.resource("login");
	this.resource("manager");
});

App.UserRoute = Ember.Route.extend({
	model: function () {
		return this.store.find('user');
	}
});

App.AlianceRoute = Ember.Route.extend({
	model: function () {
		return this.store.find('aliance');
	}
});

App.LoginRoute = App.UserRoute.extend({
	templateName: 'login'
});

App.ManagerRoute = App.AlianceRoute.extend({
	templateName: 'manager',
	
	afterModel: function(transition) {
		console.log(this.controllerFor('login').get('userLogged'))
		var mControl = this.controllerFor('manager');
		mControl.set('loggedUser', this.controllerFor('login').get('userLogged'));
	}
});