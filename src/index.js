import {
  createInterface,
} from 'readline';
import CommandFactory from './main/commandFactory';
import Ui from './main/ui';

function start() {
  let pauseReading = false;
  const io = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  let ui = new Ui(io);

  function pauseReadLine(fn) {
    pauseReading = true;
    io.pause();
    try {
      fn();
    } catch (err) {
      io.write(err.message);
      io.write('\n');
    }
    io.resume();
    pauseReading = false;
  }

  io.on('line', (input) => {
    if (pauseReading) return;
    pauseReadLine(() => {
      const command = CommandFactory.create(input);
      if (command) {
        const result = command.execute();
        if (result.renderAt) {
          ui = ui.addElement(result);
          ui.render();
          io.write('\n');
        }
      }
    });
  });

  pauseReadLine(() => {
    io.write('\n\n You can start drawing now.\n\n');
  });
}

start();
