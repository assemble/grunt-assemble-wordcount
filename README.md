# assemble-contrib-wordcount [![NPM version](https://badge.fury.io/js/assemble-contrib-wordcount.png)](http://badge.fury.io/js/assemble-contrib-wordcount) 

> Assemble plugin for displaying a wordcount on blog posts or pages.

# Quickstart
In the command line, run:

```bash
npm install assemble-contrib-wordcount --save
```

Next, register the plugin with Assemble in your project's Gruntfile:

```js
assemble: {
  options: {
    plugin: ['assemble-contrib-wordcount', 'other/plugins/*']
  }
}
```
You can also use the plugin with specific targets:

```js
assemble: {
  foo: {
    options: {
      plugin: ['assemble-contrib-wordcount']
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


### Usage Examples

> Currently the plugin is hard-coded to use certain markup and attributes

**In your templates**

* Use `id="wordcount"` to wrap the content that the plugin should run against
* Use `data-words=""` where you want the resulting number (count) to render

```html
<!-- Blog Posts -->
<div id="wordcount">
  <span data-words="" class="label label-info"></span>
  {{> body }}
</div>
```

**Rendered HTML**

```html
<!-- Blog Posts -->
<div id="wordcount">
  <span data-words="60" class="label label-info">60</span>
  <p>In deserunt venison doner velit cow pastrami magna dolore ut jerky proident
  esse laborum. Fatback strip steak biltong tri-tip beef pork belly spare ribs
  in ut capicola. Sunt qui t-bone jerky est culpa. Deserunt duis adipisicing
  ullamco ex, eiusmod beef salami labore non chuck occaecat tenderloin shank
  cillum. Quis t-bone hamburger pancetta aliqua dolor. Magna eu ground round
  aliqua.</p>
</div>
```
It would be trivial to change these hard-coded defaults, so if you have a need for more flexibilty or if you want something different than what the plugin currently does, please [create a feature request](https://github.com/jonschlinkert/assemble-contrib-wordcount/issues).



## Related Projects
You might also be interested in these other plugins from the Assemble core team:  

### [assemble-contrib-anchors](https://github.com/assemble/assemble-contrib-anchors) [![NPM version](https://badge.fury.io/js/assemble-contrib-anchors.png)](http://badge.fury.io/js/assemble-contrib-anchors)
> Assemble plugin for creating anchor tags from generated html.  

### [assemble-contrib-contextual](https://github.com/assemble/assemble-contrib-contextual) [![NPM version](https://badge.fury.io/js/assemble-contrib-contextual.png)](http://badge.fury.io/js/assemble-contrib-contextual)
> Generates a JSON file containing the context of each page. Basic plugin to help see what's happening in the build.  

### [assemble-contrib-markdown](https://github.com/assemble/assemble-contrib-markdown) [![NPM version](https://badge.fury.io/js/assemble-contrib-markdown.png)](http://badge.fury.io/js/assemble-contrib-markdown)
> Convert markdown files to HTML using marked.js. This plugin is an alternative to Assemble's markdown Handlebars helpers. Both are useful in different scenarios.  

### [assemble-contrib-permalinks](https://github.com/assemble/assemble-contrib-permalinks) [![NPM version](https://badge.fury.io/js/assemble-contrib-permalinks.png)](http://badge.fury.io/js/assemble-contrib-permalinks)
> Permalinks plugin for Assemble, the static site generator for Grunt.js and Yeoman. This plugin enables powerful and configurable URI replacement patterns, presets, uses Moment.js for parsing dates, and much more.  

### [assemble-contrib-rss](https://github.com/assemble/assemble-contrib-rss) [![NPM version](https://badge.fury.io/js/assemble-contrib-rss.png)](http://badge.fury.io/js/assemble-contrib-rss)
> Plugin for creating RSS feeds with Assemble, the static site generator for Node.js, Grunt.js and Yeoman.   

### [assemble-contrib-sitemap](https://github.com/assemble/assemble-contrib-sitemap) [![NPM version](https://badge.fury.io/js/assemble-contrib-sitemap.png)](http://badge.fury.io/js/assemble-contrib-sitemap)
> Sitemap generator plugin for Assemble  

### [assemble-contrib-toc](https://github.com/assemble/assemble-contrib-toc) [![NPM version](https://badge.fury.io/js/assemble-contrib-toc.png)](http://badge.fury.io/js/assemble-contrib-toc)
> Create a table of contents in the generated HTML, using Cheerio.js                                                     

To update this list, download this project, then in the command line run `npm i && node docs/repos && grunt`.

## Contributing
Find a bug? Have a feature request? Please [create an Issue](https://github.com/assemble/assemble/issues/new). Pull requests are also encouraged.
If you find this project useful, please consider "starring" it to show your support! Thanks!

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

_This file was generated by [grunt-readme](https://github.com/assemble/grunt-readme) on Sunday, November 17, 2013._
