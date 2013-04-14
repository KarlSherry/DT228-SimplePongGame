if (Meteor.is_server) {
Players = new Meteor.Collection("players");
	Meteor.startup(function() {
		Players.insert({name:"Test"});
	});
}
