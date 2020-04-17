import { BotOptions } from '../types/BotOptions';
import * as Discord from 'discord.js';
import { CommandCollection } from '../command/CommandCollection';
import { EventCollection } from '../event/EventCollection';
import { CommandLoader } from '../command/CommandLoader';
import { EventLoader } from '../event/EventLoader';
/**
 * The BaseBot Client
 * @param {BotOptions} options Object containing required client properties
 * @param {ClientOptions} clientOptions Discord.js ClientOptions
 */
export class Client extends Discord.Client {
    Events: EventCollection<this>;
    Commands: CommandCollection<this>;

    private eventsDir!: string;
    private commandsDir!: string;
    private storageCString?: string;

    private commandLoader: CommandLoader;
    private eventLoader: EventLoader;

    public constructor(options: BotOptions, clientOptions?: Discord.ClientOptions) {
        super(clientOptions);

        Object.assign(this, options);

        this.Events = new EventCollection<this>(this);
        this.Commands = new CommandCollection<this>(this);

        this.commandLoader = new CommandLoader(this);
        this.eventLoader = new EventLoader(this);
    }

    /**
     * Loads commands and events
     */
    public async init(): Promise<any> {
        // Load events from eventsDir
        await this.eventLoader.loadEvents(this.eventsDir);
        // Load base commands
        await this.commandLoader.loadCommands('../command/base');
        // Load commands from commandsDir
        await this.commandLoader.loadCommands(this.commandsDir);
    }

    /**
     * Logs client into Discord gateway
     * @returns Returns resolved or rejected login promise.
     */
    public async start(): Promise<string> {
        if (!this.token)
            return Promise.reject('CLIENT CANNOT BE STARTED WITHOUT BEING GIVEN A TOKEN');
        return this.login(this.token);
    }
}
