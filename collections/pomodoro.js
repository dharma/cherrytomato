
var fixDate = function(doc) {
	console.log("dateMunge::doc: " + JSON.stringify(doc));
	doc.startDate = doc.startDate.toDateString() + ", " + doc.startDate.toLocaleTimeString();
	return doc;
};



// note: avoid using 'var' for collection declarations
Pomodoros = new Meteor.Collection("pomodoros");

// try:
//Pomodoros = new Meteor.Collection("pomodoros", {transform: fixDate});


// allow dharma
var dharmaId = Meteor.users.findOne({username:'dharma'})._id;


var allowed = [dharmaId];


Pomodoros.allow({
	insert	: function(userId, doc) {
		console.log("dharmaId: " + dharmaId);

		if( userId === allowed[0]) {
			return true;
		}
	},

	remove	: function(userId, doc) {
		console.log("doc.user._id: " + doc.user._id);
		if( userId === doc.user._id) {
			return true;
		}
	}

});
