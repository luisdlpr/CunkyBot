import {
  Collection,
  CommandInteraction,
  InteractionReplyOptions,
  MessagePayload,
  SlashCommandBuilder,
} from 'discord.js';

export interface MockRepliableInteraction {
  reply: Mock<
    (
      options: string | MessagePayload | InteractionReplyOptions
    ) =>
      | Promise<boolean>
      | Promise<Message<BooleanCache<Cached>>>
      | Promise<InteractionResponse<BooleanCache<Cached>>>
  >;
}

export interface SlashCommand {
  data: SlashCommandBuilder;
  execute: (interaction: CommandInteraction | MockRepliableInteraction) => void;
}

declare module 'discord.js' {
  export interface Client {
    commands: Collection<string, SlashCommand>;
  }
}
