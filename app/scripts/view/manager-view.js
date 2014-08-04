App.ManagerView = Ember.View.extend({
	templateName: "manager",
	actions: {
		saveAliance: function() {
			var alianceName = this.$().find('#alianceNameInput').val();
			var alianceStatus = this.$().find('#statusSelect :selected');

			this.get('controller').send('saveAliance', alianceName, alianceStatus.text(), alianceStatus.val());
		}
	}
});