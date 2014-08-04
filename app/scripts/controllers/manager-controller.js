App.ManagerController = Ember.ArrayController.extend({
	loggedUser: null,
  	sortAscending: true,
	selectClass: ['form-control'],
	statusList: [
		{ title:"Ally", color:"green" },
		{ title:"Vassal", color:"orange" },
		{ title:"Non Aggression Pact", color:"blue" },
		{ title:"Enemy", color:"red" }
	],
	actions: {
		saveAliance: function(alianceName, status, colored) {
			var date = new Date();
			var day = (date.getDay() < 9) ? '0'+date.getDay() : date.getDay();
			var month = (date.getMonth() < 9) ? '0'+date.getMonth() : date.getMonth()
			
			var settelmentDate = day + '.' + month + '.' + date.getFullYear().toString().slice(2);

			if(this.loggedUser != "") {
				aliance = this.store.createRecord('aliance', {
					name: this.loggedUser,
					aliance: alianceName,
					status: status,
					fill: colored,
					date: settelmentDate
				});
				
				aliance.save();
			}
		},
		removeAliance: function(role) {
			role.deleteRecord();
			role.save();
		},

		sortBy: function(option) {
			this.set('sortProperties', [option])
			// (this.sortAscending) ? this.set('sortAscending', false) : this.set('sortAscending', true);
		}
	}
});