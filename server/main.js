

// server: publish the rooms collection, minus secret info.
Meteor.publish("mypomodoros", function () {
	//return Pomodoros.find( {"user._id":Meteor.user()._id} );
	return Pomodoros.find( {"user._id":this.userId} );
});

