import { BaseInteraction, CommandInteraction } from 'discord.js';

async function handleCommandInteractionError(interaction: CommandInteraction) {
  if (interaction.replied || interaction.deferred) {
    await interaction.followUp({
      content: 'There was an error while executing this command!',
      ephemeral: true,
    });
  } else {
    await interaction.reply({
      content: 'There was an error while executing this command!',
      ephemeral: true,
    });
  }
}

export default async function interactionCreateHandler(interaction: BaseInteraction) {
  if (interaction.isChatInputCommand()) {
    const commandInteraction = interaction as CommandInteraction;
    const command = commandInteraction.client.commands.get(commandInteraction.commandName);
    if (!command) {
      console.error(`No command matching ${commandInteraction.commandName} was found.`);
      return;
    }

    try {
      await command.execute(commandInteraction);
    } catch (error) {
      console.error(error);
      await handleCommandInteractionError(commandInteraction);
    }
  } else {
    console.log('Interaction not recognized', interaction);
  }
}
