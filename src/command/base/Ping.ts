import { Client } from '../../client/Client';
import { Command } from '../Command';
import { Message } from 'discord.js';
import { GuildSettings } from '../../types/GuildSettings';

export default class extends Command {
    public constructor() {
        super({
            cmdName: 'ping',
            cmdDesc: 'Get ping to Discord gateway',
            cmdEnabled: true,
            cmdHasArgs: true,
        });
    }

    public async execute(client: Client, message: Message, args: string[]): Promise<Message> {
        const a: Message = await message.channel.send(`Ping :timer:`);
        return a.edit(`Ping :timer: ${a.createdTimestamp - message.createdTimestamp}ms`);
    }
}
