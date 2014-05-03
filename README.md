# assemble-middleware-wordcount [![NPM version](https://badge.fury.io/js/assemble-middleware-wordcount.png)](http://badge.fury.io/js/assemble-middleware-wordcount)

> Assemble middleware for displaying wordcount and average reading time to blog posts or pages.

**Upgrade notice!**: as of v0.4.0, _this middlweare requires Assemble v0.5.0._

## Quickstart
In the command line, run:

```bash
npm install assemble-contrib-wordcount --save
```

Next, register the plugin with Assemble:

```js
assemble: {
  options: {
    middleware: ['assemble-middleware-wordcount', 'other/middleware/*']
  }
}
```

Visit the [middleware docs](http://assemble.io/middleware/) for more info or for help getting started.


## Options
#### speed
Type: `Number`
Default: `300`

Average "words per minute" to use for calculating reading time. This plugin uses 300 as the default based on the averages listed in [this Forbes article](http://onforb.es/1crk3KF).

#### seconds
Type: `Boolean`
Default: `undefined`

Define `seconds: true` in the option to display seconds and minutes. Example: `7 min, 47 sec`. (by default time is rendered in 1 minute increments, e.g. `8 min`).

#### placement
Type: `String`
Default: `prepend`

Determines whether the wordcount and reading time will be prepended or appended. Example:

#### selector
Type: `String`
Default: `.wordcount`

The selector to target for the element that wraps the content that contains the words to count.

#### countSelector
Type: `String`
Default: `.label-wordcount`

The selector to use for the element that will render the wordcount.

#### timeSelector
Type: `String`
Default: `.label-reading-time`

The selector to use for the element that will render the estimated reading time.


## Usage Examples
#### Basic example

**In your templates**

* `class="wordcount"` must wrap the content that the plugin should run against
* `class="label-wordcount"` on the element that should render the wordcount.
* `class="label-reading-time"` on the element that should render the reading time.

```html
<!-- Blog Posts -->
<div class="wordcount">
  <span class="label-wordcount"> words</span>
  <span class="label-reading-time"> read</span>
  {{> body }}
</div>
```

**Rendered HTML**

```html
<!-- Blog Posts -->
<div class="wordcount">
  <span class="label-wordcount" data-wordcount="1561">1561 words</span>
  <span class="label-reading-time" data-reading-time="7 min">7 min read</span>
  <p>In deserunt venison doner velit cow pastrami magna dolore ut jerky proident
  esse laborum. Fatback strip steak biltong tri-tip beef pork belly spare ribs
  in ut capicola. Sunt qui t-bone jerky est culpa. Deserunt duis adipisicing
  ullamco ex, eiusmod beef salami labore non chuck occaecat tenderloin shank
  cillum. Quis t-bone hamburger pancetta aliqua dolor. Magna eu ground round
  aliqua...
</div>
```

#### Change selectors

The default selector is `.wordcount`. You can change this in the options as follows:

```js
options: {
  plugins: ['assemble-contrib-wordcount'],
  wordcount: {
    selector: '.foo',
    countSelector: '.bar'
    timeSelector: '.baz'
  }
}
```
And in your templates:

```html
<!-- Blog Posts -->
<div class="foo">
  {{> post }}
</div>
```
Then in `post.hbs`:

```html
<!-- Post -->
<article class="post">
  <h1>Breaking News</h1>
  <span class="bar"> words</span>
  <span class="baz"> read</span>
</article>
```

#### Display seconds

In the plugin's options, define `seconds: true`:

```js
options: {
  plugins: ['assemble-contrib-wordcount'],
  wordcount: {
    seconds: true
  }
}
```

The result will look something like this:

```html
<span class="label-wordcount" data-wordcount="1561">1561 words</span>
<span class="label-reading-time" data-reading-time="7 minutes, 48 seconds">7 minutes, 48 seconds read</span>
```

If less than 1 minute, the results will look something like this:

```html
<span class="label-wordcount" data-wordcount="12">12 words</span>
<span class="label-reading-time" data-reading-time="2 seconds">2 seconds read</span>
```


#### Placement
By default, wordcount and reading time are prepended to the text node of the specified element. Example:

```html
<span class="label-wordcount" data-wordcount="1561">1561 words</span>
<span class="label-reading-time" data-reading-time="7 minutes, 48 seconds">7 minutes, 48 seconds read</span>
```

You can change this to `append` in the options:

```js
options: {
  wordcount: {
    placement: 'append'
  }
}
```
And this template:

```html
<span class="label-wordcount">Words: </span>
<span class="label-reading-time">Estimated reading time: </span>
```

Would result in:

```html
<span class="label-wordcount" data-wordcount="1561">Words: 1561</span>
<span class="label-reading-time" data-reading-time="7 minutes, 48 seconds">Estimated reading time: 8 minutes</span>
```

***

## Contributing
Find a bug? Have a feature request? Please [create an Issue](https://github.com/assemble/assemble-middleware-wordcount/issues).

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality,
and run `docs` in the command line to build the docs with [Verb](https://github.com/assemble/verb).

Pull requests are also encouraged, and if you find this project useful please consider "starring" it to show your support! Thanks!

## Authors

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

**Brian Woodward**

+ [github/doowb](https://github.com/doowb)
+ [twitter/doowb](http://twitter.com/doowb)


## Related projects
Here are some related projects you might be interested in from the [Assemble](http://assemble.io) core team.

+ [assemble-middleware-anchors](https://api.github.com/repos/assemble/assemble-middleware-anchors): Assemble middleware for creating anchor tags from generated html. 
+ [assemble-middleware-contextual](https://api.github.com/repos/assemble/assemble-middleware-contextual): Assemble middleware for generating a JSON file containing the context of each page. Basic middleware to help see what's happening in the build. 
+ [assemble-middleware-decompress](https://api.github.com/repos/assemble/assemble-middleware-decompress): Assemble plugin for extracting zip, tar and tar.gz archives.  
+ [assemble-middleware-download](https://api.github.com/repos/assemble/assemble-middleware-download): Assemble middleware for downloading files from GitHub. 
+ [assemble-middleware-drafts](https://api.github.com/repos/assemble/assemble-middleware-drafts): Assemble middleware (v0.5.0) for preventing drafts from being rendered. 
+ [assemble-middleware-i18n](https://api.github.com/repos/assemble/assemble-middleware-i18n): Assemble middleware for adding i18n support to projects. 
+ [assemble-middleware-lunr](https://api.github.com/repos/assemble/assemble-middleware-lunr): Assemble middleware for creating a search engine within your static site using lunr.js. 
+ [assemble-middleware-permalinks](https://api.github.com/repos/assemble/assemble-middleware-permalinks): Permalinks middleware for Assemble, the static site generator for Grunt.js and Yeoman. This plugin enables powerful and configurable URI replacement patterns, presets, uses Moment.js for parsing dates, and much more. 
+ [assemble-middleware-rss](https://api.github.com/repos/assemble/assemble-middleware-rss): Assemble middleware for creating RSS feeds with Assemble. (NOT published yet!) 
+ [assemble-middleware-sitemap](https://api.github.com/repos/assemble/assemble-middleware-sitemap): Assemble middleware for generating sitemaps. 
+ [assemble-middleware-toc](https://api.github.com/repos/assemble/assemble-middleware-toc): Assemble middleware for creating a table of contents in the generated HTML, using Cheerio.js 
+ [assemble-middleware-wordcount](https://api.github.com/repos/assemble/assemble-middleware-wordcount): Assemble middleware for displaying a word-count, and estimated reading time on blog posts or pages.  

Visit [assemble.io/assemble-middleware](http:/assemble.io/assemble-middleware/) for more information about [Assemble](http:/assemble.io/) middleware.


## License
Copyright (c) 2014 Jon Schlinkert, contributors.  
Released under the MIT license

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on May 03, 2014._
