import { Collection } from 'discord.js';
import utilCommands from './util.js';

function createCommandCollection() {
  const commands = new Collection();

  [utilCommands].forEach((commandList) => {
    commandList.forEach((command) => {
      commands.set(command.data.name, command);
    });
  });

  return commands;
}

export default createCommandCollection();
