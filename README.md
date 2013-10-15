# grunt-fragment

> Synchronizing code of fragments

> You can match a code of fragment into other file from a file, and make fragments are consistent between two files.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-fragment --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-fragment');
```

## The "fragment" task

### Overview
In your project's Gruntfile, add a section named `fragment` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  fragment: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.encode
Type: `String`
Default value: ` grunt.file.defaultEncoding `

A string value that is encoding method.

#### options.match
Type: `RegExp`
Default value: `'/[\S\s]+/gm'`

A RegExp that to match a code of fragment and replace others in target file.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `from.js` file has the function `syncFunc` return 'new version' and the `to.js` file had the function `syncFunc` return `old version`, the generated result would be `to.js` file had the function `syncFunc` return `new version`.

```js
grunt.initConfig({
  fragment: {
    options: {
      match: /(function syncFunc \(\) \{)[\S\s]+(\}\/\/ syncFunc end)/gm,
      encode: 'utf-8'
    },
    files: {
      'test/expected/js/to.js': 'test/expected/js/from.js',
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
