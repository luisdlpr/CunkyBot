import { SlashCommandBuilder, CommandInteraction } from 'discord.js';

const testCommand = {
  data: new SlashCommandBuilder().setName('test').setDescription('Test the CunkyBot'),
  async execute(interaction: CommandInteraction) {
    await interaction.reply('Pong');
  },
};

export default [testCommand];
