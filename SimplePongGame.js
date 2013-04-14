if (Meteor.isClient) {
  Meteor.subscribe("players");
  Template.hello.greeting = function () {
    return "Welcome to SimplePongGame.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}



if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
