import { BotClient } from "../client/BotClient";
import { Event } from "./Event";
import { Collection } from "discord.js";

export class EventCollection<T extends BotClient, K extends string = string,
    V extends Event = Event> extends Collection<K, V> {
    private readonly _client: BotClient;
    public constructor (client: T) {
        super();

        this._client = client;
    }
}