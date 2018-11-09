# CONSOLE DRAWING


### Installation

ConsoleDrawing requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the program.

```sh
$ cd console-drawing
$ npm install -d
$ npm start
```

### Testing

Run the Jest tests file with npm:

```sh
$ cd console-drawing
$ npm test
```


### Notes
The project is using ES6 Modules. Upon start a babel script transpiles the files and saves them into the '/dist' folder. From which node will serve them.

The code coverage is dispayed after all tests have run.
- 100% of functions covered
- 98% of lines of code

Some assumptions that were made:
- Canvas cannot be larger than 100x100
- Drawing a new Canvas over an existing will reset all the shapes
- The last shape drawn will be overlaid over the previous ones
- A shape cannot be drawn over the edge of the canvas

### Tech

ConsoleDrawing uses a number of open source projects to work properly:

* [node.js](https://nodejs.org/) - JavaScript runtime built on Chrome's V8 JavaScript engine
* [Jest](https://jestjs.io/) - Delightful JavaScript Testing
* [Babel](https://babeljs.io/) - The compiler for next generation JavaScript