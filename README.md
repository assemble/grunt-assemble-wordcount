# assemble-contrib-wordcount [![NPM version](https://badge.fury.io/js/assemble-contrib-wordcount.png)](http://badge.fury.io/js/assemble-contrib-wordcount) 

> Assemble plugin for displaying a wordcount on blog posts or pages.

## Quickstart
In the command line, run:

```bash
npm install assemble-contrib-wordcount --save
```

Next, register the plugin with Assemble in your project's Gruntfile:

```js
assemble: {
  options: {
    plugins: ['assemble-contrib-wordcount', 'other/plugins/*']
  }
}
```
You can also use the plugin with specific targets:

```js
assemble: {
  foo: {
    options: {
      plugins: ['assemble-contrib-wordcount', 'other/plugins/*']
    },
    files: {'dist/': 'content/*.md'}
  },
  // The plugin won't run on this target
  bar: {
    files: {'dist/': 'templates/*.hbs'}
  }
}
```

Visit the [plugins docs](http://assemble.io/plugins/) for more info or for help getting started.



## Options
#### seconds
Type: `Booleand`
Default: `undefined`

Define `seconds: true` in the option to display seconds and minutes. Example: `7 min, 47 sec`. (by default time is rendered in 1 minute increments, e.g. `8 min`).


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
#### Display seconds

In the plugin's options in the Assemble task, define `seconds: true`:

```js
assemble: {
  options: {
    plugins: ['assemble-contrib-wordcount'],
    wordcount: {
      seconds: true
    }
  },
  files: {}
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



***

## Assemble plugins
Here are some related projects you might be interested in from the [Assemble](http://assemble.io) core team.  

#### [assemble-contrib-anchors](https://github.com/assemble/assemble-contrib-anchors) [![NPM version](https://badge.fury.io/js/assemble-contrib-anchors.png)](http://badge.fury.io/js/assemble-contrib-anchors)
> Assemble plugin for creating anchor tags from generated html.  

#### [assemble-contrib-contextual](https://github.com/assemble/assemble-contrib-contextual) [![NPM version](https://badge.fury.io/js/assemble-contrib-contextual.png)](http://badge.fury.io/js/assemble-contrib-contextual)
> Generates a JSON file containing the context of each page. Basic plugin to help see what's happening in the build.  

#### [assemble-contrib-decompress](https://github.com/assemble/assemble-contrib-decompress) [![NPM version](https://badge.fury.io/js/assemble-contrib-decompress.png)](http://badge.fury.io/js/assemble-contrib-decompress)
> Assemble plugin for extracting zip, tar and tar.gz archives.   

#### [assemble-contrib-download](https://github.com/assemble/assemble-contrib-download) [![NPM version](https://badge.fury.io/js/assemble-contrib-download.png)](http://badge.fury.io/js/assemble-contrib-download)
> Assemble plugin for downloading files from GitHub.  

#### [assemble-contrib-lunr](https://github.com/assemble/assemble-contrib-lunr) [![NPM version](https://badge.fury.io/js/assemble-contrib-lunr.png)](http://badge.fury.io/js/assemble-contrib-lunr)
> Assemble plugin for creating a search engine within your static site using lunr.js.  

#### [assemble-contrib-markdown](https://github.com/assemble/assemble-contrib-markdown) [![NPM version](https://badge.fury.io/js/assemble-contrib-markdown.png)](http://badge.fury.io/js/assemble-contrib-markdown)
> Convert markdown files to HTML using marked.js. This plugin is an alternative to Assemble's markdown Handlebars helpers. Both are useful in different scenarios.  

#### [assemble-contrib-permalinks](https://github.com/assemble/assemble-contrib-permalinks) [![NPM version](https://badge.fury.io/js/assemble-contrib-permalinks.png)](http://badge.fury.io/js/assemble-contrib-permalinks)
> Permalinks plugin for Assemble, the static site generator for Grunt.js and Yeoman. This plugin enables powerful and configurable URI replacement patterns, presets, uses Moment.js for parsing dates, and much more.  

#### [assemble-contrib-sitemap](https://github.com/assemble/assemble-contrib-sitemap) [![NPM version](https://badge.fury.io/js/assemble-contrib-sitemap.png)](http://badge.fury.io/js/assemble-contrib-sitemap)
> Sitemap generator plugin for Assemble  

#### [assemble-contrib-toc](https://github.com/assemble/assemble-contrib-toc) [![NPM version](https://badge.fury.io/js/assemble-contrib-toc.png)](http://badge.fury.io/js/assemble-contrib-toc)
> Create a table of contents in the generated HTML, using Cheerio.js 

Visit [assemble.io/plugins](http:/assemble.io/plugins/) for more information about [Assemble](http:/assemble.io/) plugins.


## Contributing
Find a bug? Have a feature request? Please [create an Issue](https://github.com/assemble/assemble-contrib-wordcount/issues).

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][], and build the documentation with [grunt-readme](https://github.com/assemble/grunt-readme).

Pull requests are also encouraged, and if you find this project useful please consider "starring" it to show your support! Thanks!


## Authors

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

**Brian Woodward**

+ [github/doowb](https://github.com/doowb)
+ [twitter/doowb](http://twitter.com/jonschlinkert)


## License
Copyright (c) 2013 Jon Schlinkert, contributors.
Released under the MIT license

***

_This file was generated by [grunt-readme](https://github.com/assemble/grunt-readme) on Wednesday, December 11, 2013._

[grunt]: http://gruntjs.com/
[Getting Started]: https://github.com/gruntjs/grunt/blob/devel/docs/getting_started.md
[package.json]: https://npmjs.org/doc/json.html

