
Router.configure({
	layoutTemplate: 'layout',
	waitOn: function () {
		return [Meteor.subscribe('mypomodoros')];
	}
});

Router.map(function () {
	this.route('pomodorosList', { path: '/' });
});

