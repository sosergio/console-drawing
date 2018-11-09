import Line from '../elements/line';


/**
 *The command to create a Line
 *
 * @export
 * @class LineCommand
 */
export default class LineCommand {
  /**
   *Creates an instance of LineCommand from a string with this pattern: L x1 y1 x2 y2
   * @param {*} str
   * @memberof LineCommand
   */
  constructor(str) {
    const lineCmd = '[L x1 y1 x2 y2]';
    if (!str) throw new Error(`${lineCmd} invalid line command`);
    const params = str.split(' ').splice(1);
    if (params.length !== 4) throw new Error(`${lineCmd} invalid number of parameters: ${params.length}, must be 4`);
    const inputs = params.map(c => parseInt(c, 10));
    try {
      this.shape = new Line(inputs[0], inputs[1], inputs[2], inputs[3]);
    } catch (err) {
      throw new Error(`${lineCmd} line command ${err}`);
    }
  }

  /**
   *Returns the Line
   *
   * @returns
   * @memberof LineCommand
   */
  execute() {
    return this.shape;
  }
}
