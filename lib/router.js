//Tells router to use the layout template as the default layout
Router.configure(
	{
	layoutTemplate: 'layout',
	//subscribe to the posts subscription for every route on the site
	loadingTempleate: 'loading',
	waitOn: function() {return Meteor.subscribe('posts');}
	}
	);
//Define route named postsList 
Router.route('/', {name: 'postsList'});