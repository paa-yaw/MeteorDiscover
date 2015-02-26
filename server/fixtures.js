if (Posts.find().count()===0 )
{
	Posts.insert({
		title: 'New Scientist',
		url: 'http://newscientist.com'
	});

	Posts.insert ({
		title: 'Cancer Genetics',
		url: 'http://cancer.gov'
	});

	Posts.insert ({
		title: 'The Genome Web',
		url: 'http://genomeweb.com'
	});

	Posts.insert ({
		title: 'National Human Genome Research Institute',
		url: 'http://genome.gov'
	});
}