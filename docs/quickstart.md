In the command line, run:

```bash
npm install assemble-contrib-wordcount --save
```

Next, register the plugin with Assemble:

```js
assemble: {
  options: {
    middleware: ['{%= name %}', 'other/middleware/*']
  }
}
```

Visit the [middleware docs](http://assemble.io/middleware/) for more info or for help getting started.
