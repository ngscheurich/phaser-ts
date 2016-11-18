# Phaser TypeScript CLI

[![NPM version][npm-image]][npm-url]
[![Dependency Status][daviddm-image]][daviddm-url]

A command line interface for interacting with Phaser TypeScript projects.

## Installation

`$ npm install -g phaser-ts`

## Usage

`$ phaser-ts generate <name>` will generate a new file at `src/<name>.ts` and
add that file to the `files` array in your tsconfig.js.

```
$ phaser-ts generate --help

  Usage: generate|g [options] <name>

  generate a new source file

  Options:

    -h, --help             output usage information
    -x, --extends [class]  which Phaser class to extend (defaults to State)

  Examples:

    $ phaser-ts generate MyState
    $ phaser-ts generate --extends Sprite MySprite

```

## License

This project is ISC © [Nicholas Scheurich](http://nick.scheurich.me).<br>
*Phaser* is MIT © Richard Davey, Photon Storm Ltd.

[npm-image]: https://badge.fury.io/js/phaser-ts.svg
[npm-url]: https://npmjs.org/package/phaser-ts
[daviddm-image]: https://david-dm.org/ngscheurich/phaser-ts.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/ngscheurich/phaser-ts
