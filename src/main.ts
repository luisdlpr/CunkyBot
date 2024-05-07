// Require the necessary discord.js classes
import { Client, Events, GatewayIntentBits } from 'discord.js';
import 'dotenv/config';
import createCommandCollection from './commands/index.js';
import interactionCreateHandler from './eventHandlers/interactionCreateHandler.js';

const token = process.env.DISCORD_TOKEN;

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once).
client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// Register commands.
client.commands = createCommandCollection();

client.on(Events.InteractionCreate, interactionCreateHandler);

// Log in to Discord with your client's token
client.login(token);
