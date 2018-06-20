# Multi authors support for Hexo #
_Not maintained by Nodes anymore_

[![Build Status](https://travis-ci.org/nodes-frontend/hexo-multiauthors.svg?branch=master)](https://travis-ci.org/nodes-frontend/hexo-multiauthors) 
[![Coverage Status](https://coveralls.io/repos/github/nodes-frontend/hexo-multiauthors/badge.svg?branch=master)](https://coveralls.io/github/nodes-frontend/hexo-multiauthors?branch=master)
[![Code Climate](https://codeclimate.com/github/nodes-frontend/hexo-multiauthors/badges/gpa.svg)](https://codeclimate.com/github/nodes-frontend/hexo-multiauthors)
[![npm version](https://badge.fury.io/js/hexo-multiauthor.svg)](http://badge.fury.io/js/hexo-multiauthor)

## Description

Tested wit Hexo 3.x
 
This plugin adds support for multiple authors for articles. You can add authors to a post by adding an `authorIds` array to the frontmatter.
 
    title: Sample post
    date: 2014/01/10 12:00
    tags: [hexo]
    authorIds: 
    - ABC
    - DEF
 
At this point, this plugin expects two files `source/_authors/ABC.yml` and `source/_authors/DEF.yml` to exist. In the author files you can add Author Metadata ie.:
  
	name: Luke Skywalker
	about: Pilot
	
This plugin will create Author pages (/authors/`authorId`) when you run `hexo generate` - each page contains a paginated list of posts written by the Author. The generator expects a layout called authors, but will fall back to the index layout if it cannot be found.
