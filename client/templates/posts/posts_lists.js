// template logic for postList template

// var postsData = [
// {
// 	title: ' New Scientist',
// 	url: 'http://newscientist.com'
// },

// {
// 	title: 'Cancer Genetics',
// 	url: 'http://cancer.gov'
// },

// {
// 	title: 'The Genome Web',
// 	url: 'http://genomeweb.com'
// }

// ];

//template helper creates posts which parses postsData array to postsList template

Template.postsList.helpers({
	posts: function () {
		return Posts.find({}, {sorted: {submitted: -1}});
	}
});