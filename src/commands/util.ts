import { SlashCommandBuilder } from 'discord.js';
import { SlashCommand } from '../types/discordjs.js';

export const testCommand: SlashCommand = {
  data: new SlashCommandBuilder().setName('test').setDescription('Test the CunkyBot'),
  async execute(interaction) {
    await interaction.reply('Pong');
  },
};

export default [testCommand];
