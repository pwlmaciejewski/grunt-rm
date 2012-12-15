grunt-rm
========

Grunt multi-task that removes specified files and directories.

## Installation

```
npm install grunt-rm
```

For more information see grunt.js documentation:
https://github.com/cowboy/grunt/blob/master/docs/toc.md

## Config

```javascript
rm: {
  foo: 'js/*/**',
  bar: [
    'css/reset.css',
    'css/style.css'
  ],
  someDir: {
  	dir: 'css/images/'
  }
}
```

## Release notes

#### 0.0.4

* Change to fs.existsSync with backwards compatibility (thanks to [pcottle](https://github.com/pcottle))

#### 0.0.3

* Removing directories (thanks to [Ricardo Bin](https://github.com/ricardohbin))
