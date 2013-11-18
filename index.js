/**
* Wordcount plugin for Assemble <http://assemble.io>
* Copyright (c) 2013 Brian Woodward <https://github.com/doowb>
* Licensed under the MIT License.
*/


var options = {
  stage: 'render:post:page'
};

var cheerio = require('cheerio');

var stripTags = function(str) {
  return str.replace(/(<([^>]+)>)/ig, '');
};

/**
 * Wordcount Plugin
 * @param  {Object}   params
 * @param  {Function} callback
 */
module.exports = function(params, callback) {
  'use strict';

  // load current page content
  var $ = cheerio.load(params.content);

  // get all the anchor tags from inside the headers
  var countable = $('#wordcount');
  var content = stripTags(countable.html());

  // Solution from http://drewschrauf.com/blog/2012/06/13/javascript-wordcount-that-works/
  var matches  = content.match(/\S+\s*/g);
  var words = matches !== null ? matches.length : 0;

  // Add the wordcount to the data context
  $('[data-words]').data('words', words).append(words + ' words');
  params.content = $.html();

  callback();
};




module.exports.options = options;

