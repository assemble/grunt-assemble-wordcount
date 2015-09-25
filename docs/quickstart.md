In the command line, run:

```bash
npm install grunt-assemble-wordcount --save
```

Next, register the plugin with Assemble:

```js
assemble: {
  options: {
    plugins: ['{%= name %}', 'other/plugins/*']
  }
}
```

Visit the [plugins docs](http://assemble.io/plugins/) for more info or for help getting started.
