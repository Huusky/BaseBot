import { Client } from '../../client/Client';
import { Command } from '../Command';
import { Collection, Message } from 'discord.js';

export default class extends Command {
    public constructor() {
        super({
            cmdName: 'reload',
            cmdDesc: 'Reload all custom commands and events',
            cmdEnabled: true,
            cmdHasArgs: false,
            cmdOwnerOnly: true,
        });
    }

    public async execute(client: Client, message: Message, args: string[]): Promise<any> {
        client.reloadCommands();
    }
}
