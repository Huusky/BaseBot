import { Client } from '../../../client/Client';
import { Command } from '../../Command';
import { Message, MessageReaction, User, ReactionCollector } from 'discord.js';

export default class extends Command {
    public constructor() {
        super({
            cmdName: "restart",
            cmdDesc: "Restart the bot assuming PM2 is running",
            cmdEnabled: true,
            cmdHasArgs: false,
            cmdOwnerOnly: true
        })
    }
    
    public async execute(client: Client, message: Message, args: string[]): Promise<any> {
        process.exit(1);
    }
}