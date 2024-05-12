import { jest, describe, test, expect, beforeEach } from '@jest/globals';
import { SlashCommandBuilder } from 'discord.js';
import { MockRepliableInteraction } from '../types/discordjs.js';
import { testCommand } from '../commands/util';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('/test', () => {
  test('testCommand data is correct type with endpoint /test.', () => {
    expect(testCommand.data).toBeInstanceOf(SlashCommandBuilder);
    expect(testCommand.data.name).toBe('test');
  });

  test('testCommand execute function calls reply on the interaction object.', () => {
    class MockCommandInteraction implements MockRepliableInteraction {
      reply = jest.fn(
        (options: string) =>
          new Promise<boolean>((resolve) => {
            resolve(options != null);
          })
      );
    }

    const mockCommandInteraction = new MockCommandInteraction();
    testCommand.execute(mockCommandInteraction);
    expect(mockCommandInteraction.reply).toHaveBeenCalledTimes(1);
  });
});
