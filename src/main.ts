/*
 * Main entrypoint for bot startup.
 */
import { Client, Events, GatewayIntentBits } from 'discord.js';
import 'dotenv/config';
import createCommandCollection from './commands/index.js';
import interactionCreateHandler from './eventHandlers/interactionCreateHandler.js';

const TOKEN = process.env.DISCORD_TOKEN;

function main() {
  const client = new Client({ intents: [GatewayIntentBits.Guilds] });

  client.once(Events.ClientReady, (readyClient) => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
  });

  client.commands = createCommandCollection();

  client.on(Events.InteractionCreate, interactionCreateHandler);

  client.login(TOKEN);
}

main();
