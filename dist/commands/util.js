import { SlashCommandBuilder } from 'discord.js';
export const testCommand = {
    data: new SlashCommandBuilder().setName('test').setDescription('Test the CunkyBot'),
    async execute(interaction) {
        await interaction.reply('Pong');
    },
};
export default [testCommand];
