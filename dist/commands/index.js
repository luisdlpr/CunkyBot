import { Collection } from 'discord.js';
import utilCommands from './util.js';
export default function createCommandCollection() {
    const commandsCollection = new Collection();
    const commands = [utilCommands];
    commands.forEach((commandList) => {
        commandList.forEach((command) => {
            commandsCollection.set(command.data.name, command);
        });
    });
    return commandsCollection;
}
