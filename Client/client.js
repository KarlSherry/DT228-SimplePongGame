if(Meteor.is_client)
{
	canvase = null;
	ctx = null;

	Meteor.startup(function()
	{
		//Initialise player
		var player_name =prompt("Name", "Player");
		var player_id = Players.insert({name:player_name, Score: 0});
		Session.set('player_id', player_id);
	}
	);




}
