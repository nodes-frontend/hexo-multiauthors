'use strict';

module.exports = function(data) {
	if(data.authorIds) {
		var Authors = this.model('Authors');
		data.authors = [];
		if(!Array.isArray(data.authorIds)) {
			data.authors.push(Authors.findOne({id: data.authorIds}));
		} else {
			data.authorIds.forEach(function(authorId) {
				data.authors.push(Authors.findOne({id: authorId}));
			});
		}
	}
	return data;
};