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


## Usage Examples

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
