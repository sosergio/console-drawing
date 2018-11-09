import FillCommand from './commands/fillCommand';
import RectangleCommand from './commands/rectangleCommand';
import CanvasCommand from './commands/canvasCommand';
import LineCommand from './commands/lineCommand';
import QuitCommand from './commands/quitCommand';


/**
 *An interpreter for commands objects
 *
 * @export
 * @class CommandFactory
 */
export default class CommandFactory {
  /**
   *Returns the command based on the first letter of the input.
   *
   * @static
   * @param {*} str
   * @returns
   * @memberof CommandFactory
   */
  static create(str) {
    if (!str || str.length < 1) throw new Error('invalid command');
    const action = str[0].toUpperCase();
    switch (action) {
      case 'C':
        return new CanvasCommand(str);
      case 'L':
        return new LineCommand(str);
      case 'B':
        return new FillCommand(str);
      case 'R':
        return new RectangleCommand(str);
      case 'Q':
        return new QuitCommand();
      default:
        return null;
    }
  }
}
