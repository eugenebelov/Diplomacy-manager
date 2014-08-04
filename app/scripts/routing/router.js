'use strict';

App.Router.map(function() {
	rootURL: '#/',
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

App.IndexRoute = App.UserRoute.extend({
	beforeModel: function(transition) {
		this.transitionTo('login');
	}
});

App.LoginRoute = App.UserRoute.extend({
	templateName: 'login'
});

App.ManagerRoute = App.AlianceRoute.extend({
	templateName: 'manager',
	
	afterModel: function(transition) {
		if(this.controllerFor('login').get('userLogged') == "")
			this.transitionTo('login');

		var mControl = this.controllerFor('manager');
		mControl.set('loggedUser', this.controllerFor('login').get('userLogged'));
	}
});