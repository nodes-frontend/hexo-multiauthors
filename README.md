# Multi authors support for Hexo #

[![Build Status](https://travis-ci.org/bob983/hexo-multiauthor.svg?branch=master)](https://travis-ci.org/bob983/hexo-multiauthor) 
[![Coverage Status](https://coveralls.io/repos/bob983/hexo-multiauthor/badge.svg)](https://coveralls.io/r/bob983/hexo-multiauthor)
[![Code Climate](https://codeclimate.com/github/bob983/hexo-multiauthor/badges/gpa.svg)](https://codeclimate.com/github/bob983/hexo-multiauthor)
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