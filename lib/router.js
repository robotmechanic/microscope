//Tells router to use the layout template as the default layout
Router.configure(
	{
	layoutTemplate: 'layout'
	}
	);
//Define route named postsList 
Router.route('/', {name: 'postsList'});