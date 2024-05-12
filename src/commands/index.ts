import { Collection } from 'discord.js';
import utilCommands from './util.js';
import { SlashCommand } from '../types/discordjs.js';

export default function createCommandCollection(): Collection<string, SlashCommand> {
  const commandsCollection = new Collection<string, SlashCommand>();
  const commands = [utilCommands];

  commands.forEach((commandList) => {
    commandList.forEach((command) => {
      commandsCollection.set(command.data.name, command);
    });
  });

  return commandsCollection;
}
