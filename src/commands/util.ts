import { SlashCommandBuilder, CommandInteraction } from 'discord.js';
import { SlashCommand } from '../types/discordjs.js';

const testCommand: SlashCommand = {
  data: new SlashCommandBuilder().setName('test').setDescription('Test the CunkyBot'),
  async execute(interaction: CommandInteraction) {
    await interaction.reply('Pong');
  },
};

export default [testCommand];
