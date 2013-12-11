### Basic example

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
### Display seconds

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
