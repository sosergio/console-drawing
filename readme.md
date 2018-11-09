# CONSOLE DRAWING

### Usage

```
Command 		Description
C w h           Create a new canvas of width w and height h.
L x1 y1 x2 y2   Create a new line of 'x' from (x1,y1) to (x2,y2). Only support 
                horizontal or vertical lines.
R x1 y1 x2 y2   Create a new rectangle, (x1,y1) is upper left corner & (x2,y2) is 
                lower right corner.
B x y c         Fill the entire area around (x,y) with "colour" c.
                Same as that of the "bucket fill" tool in paint programs.
Q               Quit.
``` 

### Example
```
enter command: C 20 4
----------------------
|                    |
|                    |
|                    |
|                    |
----------------------

enter command: L 1 2 6 2
----------------------
|                    |
|xxxxxx              |
|                    |
|                    |
----------------------

enter command: L 6 3 6 4
----------------------
|                    |
|xxxxxx              |
|     x              |
|     x              |
----------------------

enter command: R 14 1 18 3
----------------------
|             xxxxx  |
|xxxxxx       x   x  |
|     x       xxxxx  |
|     x              |
----------------------

enter command: B 10 3 o
----------------------
|oooooooooooooxxxxxoo|
|xxxxxxooooooox   xoo|
|     xoooooooxxxxxoo|
|     xoooooooooooooo|
----------------------
```

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
