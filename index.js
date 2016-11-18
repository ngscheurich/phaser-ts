#!/usr/bin/env node

const fs = require('fs');
const program = require('commander');
const chalk = require('chalk');

function generateClass(name) {
  const template = `namespace FarmAnimals {
  export class ${name} extends Phaser.State {
    create() {
      // ...
    }
  }
}`;
  const path = `src/${name}.ts`;
  fs.writeFileSync(`src/${name}.ts`, template);
  console.log(chalk.green('   create ') + path);
}

function addToTsconfig(name) {
  const tsconfig = 'tsconfig.json';
  const path = `src/${name}.ts`;
  const fileContents = fs.readFileSync(tsconfig).toString();
  let json = JSON.parse(fileContents);
  json.files = json.files.concat([path]).sort();
  fs.writeFileSync(tsconfig, JSON.stringify(json, null, 2));
  console.log(chalk.yellow('    amend ') + 'tsconfig.json');
}

function addFile(name) {
  generateClass(name);
  addToTsconfig(name);
}

program.version('0.0.1');

program
  .command('generate <name>')
  .alias('g')
  .description('generate a new source file')
  .option('-x, --extends [class]', 'which Phaser class to extend (defaults to State)')
  .action((name, opts) => {
    const xclass = opts.extend || 'State';
    console.log();
    addFile(name);
  }).on('--help', () => {
    console.log('  Examples:');
    console.log();
    console.log('    $ phaser-ts generate MyState');
    console.log('    $ phaser-ts generate --extends Sprite MySprite');
    console.log();
  });

program.parse(process.argv);
