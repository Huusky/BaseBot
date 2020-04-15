import { Client } from '../client/Client';
import { Command } from './Command';
import { Collection } from 'discord.js';

export class CommandCollection<
    T extends Client,
    K extends string = string,
    V extends Command = Command
> extends Collection<K, V> {
    private readonly _client: Client;
    public constructor(client: T) {
        super();

        this._client = client;
    }
}
