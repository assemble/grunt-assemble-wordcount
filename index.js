/**
 * assemble-contrib-wordcount
 * Assemble plugin for rendering the wordcount for
 * the specified section of content.
 *
 * Copyright (c) 2013 Jon Schlinkert
 * Licensed under the MIT License
 */

var cheerio = require('cheerio');
var _ = require('lodash');

module.exports = function(params, callback) {

  'use strict';

  var grunt = params.grunt;
  var opts = params.assemble.options.wordcount || {};

  opts.placement     = opts.placement     || 'prepend';
  opts.selector      = opts.selector      || '.wordcount';
  opts.countSelector = opts.countSelector || '.label-wordcount';
  opts.timeSelector  = opts.timeSelector  || '.label-reading-time';


  // Skip over the plugin if it isn't defined in the options.
  grunt.verbose.subhead('Running:'.bold, '"assemble-config-wordcount"');
  grunt.verbose.writeln('Stage:  '.bold, '"render:post:page"\n');

  // load current page content
  var $ = cheerio.load(params.content);

  if($(opts.selector) && $(opts.selector).length > 0) {
    var countable = $(opts.selector);

    // Strip HTML tags from content
    var content = countable.html().replace(/(<([^>]+)>)/ig, '');

    // Solution from http://drewschrauf.com/blog/2012/06/13/javascript-wordcount-that-works/
    var matches = content.match(/\S+\s*/g);
    var count = matches !== null ? matches.length : 0;

    // Calculate reading time
    var min = Math.floor(count / 200);
    var sec = Math.floor(count % 200 / (200 / 60));
    var mins = min + ' minute' + (min === 1 ? '' : 's') + ', ';
    var secs = sec + ' second' + (sec === 1 ? '' : 's');
    var est = (min > 0) ? mins + secs : secs;

    // Render wordcount
    $(opts.countSelector).attr('data-wordcount', count);
    $(opts.countSelector)[opts.placement](String(count));

    // Render reading time
    $(opts.timeSelector).attr('data-reading-time', est);
    $(opts.timeSelector)[opts.placement](est);

    params.content = $.html();
  }
  callback();
};


module.exports.options = {
  stage: 'render:post:page'
};
