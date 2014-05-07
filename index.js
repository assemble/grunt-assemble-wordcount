/**
 * assemble-middleware-wordcount
 * Assemble middleware for rendering the wordcount for
 * the specified section of content.
 *
 * Copyright (c) 2014 Jon Schlinkert
 * Licensed under the MIT License
 */
'use strict';

var cheerio = require('cheerio');
var log = require('verbalize');
var _ = require('lodash');

module.exports = function (assemble) {
  var middleware = function (params, next) {
    var opts  = assemble.config.wordcount || {};

    // See http://onforb.es/1crk3KF
    opts.speed         = opts.speed         || 300;
    opts.seconds       = opts.seconds       || false;
    opts.placement     = opts.placement     || 'prepend';
    opts.selector      = opts.selector      || '.wordcount';
    opts.countSelector = opts.countSelector || '.label-wordcount';
    opts.timeSelector  = opts.timeSelector  || '.label-reading-time';

    // load current page content
    var $ = cheerio.load(params.page.content);

    if($(opts.selector) && $(opts.selector).length > 0) {
      var countable = $(opts.selector);

      // Strip HTML tags from content
      var content = countable.html().replace(/(<([^>]+)>)/ig, '');

      // Solution from http://drewschrauf.com/blog/2012/06/13/javascript-wordcount-that-works/
      var matches = content.match(/\S+\s*/g);
      var count = matches !== null ? matches.length : 0;

      // Calculate reading time
      var min, mins, sec, secs, est;
      if(opts.seconds === true) {
        min = Math.floor(count / opts.speed);
        sec = Math.floor(count % opts.speed / (opts.speed / 60));
        mins = min + ' minute' + (min === 1 ? '' : 's') + ', ';
        secs = sec + ' second' + (sec === 1 ? '' : 's');
        est = (min > 0) ? mins + secs : secs;
      } else {
        min = Math.ceil(count / opts.speed);
        est = min + ' min';
      }

      // Render wordcount
      $(opts.countSelector).attr('data-wordcount', count);
      $(opts.countSelector)[opts.placement](String(count));

      // Render reading time
      $(opts.timeSelector).attr('data-reading-time', est);
      $(opts.timeSelector)[opts.placement](est);

      params.page.content = $.html();
    }
    next();
  };

  middleware.event = 'page:after:render';
  return {
    'assemble-middleware-wordcount': middleware
  };
};
