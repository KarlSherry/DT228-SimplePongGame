if (Meteor.is_server) {

Accounts.loginServiceConfiguration.remove({
	service: "google"
});

//Accounts.loginServiceConfiguration.insert({
//	service: "google",
//	clientId: "",
//	secret: ""
//});


Players = new Meteor.Collection("players");
	Meteor.startup(function() {
		Players.insert({name:"Test"});
		console.log("Hello server");
	});

//Meteor.publish("players")

}
