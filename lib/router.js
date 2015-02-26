//this makes sure that the template is used for all routes
Router.configure ({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function () {
		return Meteor.subscribe('posts');
	}
});

//home url routed to postList template
Router.route('/', {
	name: 'postsList'//name of postsList template that replaces the {{> yield}} in the template layout
});

Router.route('/posts/:_id', {
	name: 'postPage',

	data: function() {
		return Posts.findOne(this.params._id);
	}
});

Router.route('/submit', {
	name: 'postSubmit'
});

var requireLogin= function () {

	if (!Meteor.user()) {
		if(Meteor.loggingIn()) {
			this.render(this.loadingTemplate);
		} else {
			this.render ('accessDenied');
		}
		
	}
	else 
	{
		this.next();
	}
}







Router.onBeforeAction('dataNotFound', {only: 'postPage'});

Router.onBeforeAction(requireLogin, {only: 'postSubmit'});