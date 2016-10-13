'use strict';

// Model
hexo.database.model('Authors', require('./lib/model-authors'));

//Processor - to load and parse authors
hexo.extend.processor.register('_authors/*.yml', require('./lib/processor'));

//Filter - to add author data to Post
hexo.extend.filter.register('before_post_render', require('./lib/filters/add-authors-to-post'));
hexo.extend.filter.register('template_locals', require('./lib/filters/add-authors-to-locals'));

//Generator
hexo.extend.generator.register('multiauthors', require('./lib/generator'));
