import { Client } from '../client/Client';
import { Event } from './Event';
import { Collection } from 'discord.js';

export class EventCollection<
    T extends Client,
    K extends string = string,
    V extends Event = Event
> extends Collection<K, V> {
    private readonly _client: Client;
    public constructor(client: T) {
        super();

        this._client = client;
    }
}
