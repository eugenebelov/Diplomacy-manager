App.User = DS.Model.extend({
	name: DS.attr('string'),
	hasSession: DS.attr('boolean', {defaultValue: false})
});


App.Aliance = DS.Model.extend({
	name: DS.attr('string'),
	aliance: DS.attr('string'),
	status: DS.attr('string'),
	date: DS.attr('date')
});