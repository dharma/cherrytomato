

Template.pomodorosList.helpers({

	allPomodoros : function () {
		//$('body').css('background', '#ff0000');

		//var pcursor = Pomodoros.find({}, {sort:{startDate:-1}, transform: dateMunge } );
		return Pomodoros.find({}, {sort:{startDate:-1} } );
	}
});


Template.pomodorosList.events({
	'submit #new-pomodoro' : function(e) {
		e.preventDefault();

		var pomodoro = {
			startDate : (new Date()).toLocaleString(),
			goal : $(e.target).find('[name=goal]').val(),
			user : Meteor.user()
		};

		Pomodoros.insert(pomodoro);

		$(e.target).find('[name=goal]').val('');
	},

	'click .delete-pom' : function(e) {
		//console.log("pom-id: "  + this.goal + " " + this._id);
		var goal = this.goal;
		if( Pomodoros.remove({_id:this._id}) ) {
			console.log("removed: " + goal);
			alert("Successfully removed " + goal);
		}

	}
});




