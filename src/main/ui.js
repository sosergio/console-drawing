import Canvas from './elements/canvas';
import Fill from './elements/fill';

/**
 *Represents the interface on which to draw shapes
 *
 * @export
 * @class Ui
 */
export default class Ui {
  /**
   *Creates an instance of Ui. Depends on an IO interface.
   * @param {*} intf
   * @memberof Ui
   */
  constructor(intf) {
    this.rl = intf;
    this.shapes = [];
    this.pixels = [];
  }


  /**
   *Adds an element to the interface.
   *
   * @param {*} elem
   * @returns
   * @memberof Uis
   */
  addElement(elem) {
    this.guardElemOutsideOfCanvas(elem);
    const ui = Object.assign(new Ui(), this);
    if (elem instanceof Canvas) {
      ui.canvas = elem;
      ui.shapes = [];
      ui.pixels = [];
    } else if (elem instanceof Fill) {
      ui.pixels = elem.paint(ui.pixels);
    } else if (elem.renderAt) {
      ui.shapes.push(elem);
    }
    return ui;
  }

  /**
   *Checks if the element is outside of the canvas
   *
   * @param {*} elem
   * @memberof Ui
   */
  guardElemOutsideOfCanvas(elem) {
    if (elem == null) throw new Error('invalid shape');
    if (!(elem instanceof Canvas)) {
      if (this.canvas == null) {
        throw new Error('please crete a canvas first');
      }
      if (elem.rendersInside && !elem.rendersInside(this.canvas.width - 1, this.canvas.heigth - 1)) {
        throw new Error('invalid shape, it is outside of canvas');
      }
    }
  }


  /**
   *Writes the current state of its elements onto the IO interface.
   *
   * @memberof Ui
   */
  render() {
    for (let y = 0; y < this.canvas.heigth; y += 1) {
      for (let x = 0; x < this.canvas.width; x += 1) {
        let pixel = x === 0 || y === 0 ? this.canvas.renderAt(x, y) : null;

        const line = this.pixels[x];
        if (!line) this.pixels[x] = [];

        if (!pixel) {
          for (let s = this.shapes.length - 1; s >= 0; s -= 1) {
            const v = this.shapes[s].renderAt(x, y);
            if (v) {
              pixel = v;
              break;
            }
          }
        }


        if (!pixel) {
          pixel = this.pixels[x][y] ? this.pixels[x][y] : this.canvas.renderAt(x, y);
        }
        this.pixels[x][y] = pixel;
        this.rl.write(pixel);
      }
      this.rl.write('\n');
    }
  }
}