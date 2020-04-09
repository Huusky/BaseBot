import { BotClient } from '../client/BotClient';
import { Command } from './Command';
import { Collection } from 'discord.js';

export class CommandCollection<T extends BotClient, K extends string = string, 
    V extends Command = Command> extends Collection<K, V>{
    private readonly _client: BotClient;
    public constructor (client: T) {
        super();

        this._client = client;
    }
}