'use strict';

var _ = require('lodash');
var pagination = require('hexo-pagination');

module.exports = function() {
	var Authors = this.model('Authors');
	var Post = this.model('Post');
	
	var allAuthors = Authors.find({});
	var pagesArray = allAuthors.map(function(author) {
		var postsByAuthor = Post.filter(function(post) {
			return post.authorIds.indexOf(author.id) > -1;
		});
		postsByAuthor = postsByAuthor.sort('-date');
		return pagination('authors/' + author.id, postsByAuthor, {
			layout: ['authors', 'index'],
			data  : {
				author: author
			}
		});
	});
	return _.flatten(pagesArray);
};