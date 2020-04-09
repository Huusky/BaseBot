import { BotOptions } from '../structures/BotOptions';
import { Client, ClientOptions, User } from 'discord.js';
import { CommandCollection } from '../command/CommandCollection';
import { EventCollection } from '../event/EventCollection';
import * as Glob from 'glob';
import * as Path from 'path';
import { Command } from '../command/Command';
import { Event } from '../event/Event';
/**
 * The BaseBot Client
 * @param {BotOptions} options Object containing required client properties
 * @param {ClientOptions} clientOptions Discord.js ClientOptions
 */
export class BotClient extends Client {
    Events: EventCollection<this>;
    Commands: CommandCollection<this>;

    private eventsDir!: string;
    private commandsDir!: string;

    public constructor(options: BotOptions, clientOptions?: ClientOptions) {
        super(clientOptions);

        if (options) Object.assign(this, options);

        this.eventsDir = Path.resolve(this.eventsDir);
        this.commandsDir = Path.resolve(this.commandsDir);

        this.Events = new EventCollection<this>(this);
        this.Commands = new CommandCollection<this>(this);
    }

    /**
     * Initialize commands and events
     */
    public async init(): Promise<any> {
        this.loadEvents();
        this.loadCommands();
    }

    public async start(): Promise<string> {
        return await this.login(this.token!);
    }

    public async loadEvents(): Promise<any> {
        const a = Glob.sync(`${this.eventsDir}/**/*.js`);
        for (const b of a) {
            const c = await import(b.split('.js')[0])
                .then( (event) => {
                    let d: Event = new event.default();
                    this.Events.set(d.name, d);
                    this.on(d.name, d.execute.bind(null, this));
                    console.log(`[LOAD EVENTS] [LOADED] : ${d.name}, ${d}`);
                })
                .catch( (err) => {
                    console.log(`[LOAD EVENTS] [ERROR]`, err);
                });
        }
    }
    public async loadCommands(): Promise<any> {
        const a = Glob.sync(`${this.commandsDir}/**/*.js`);
        for (const b of a) {
            const c = await import(b.split('.js')[0])
                .then( (command) => {
                    let d: Command = new command.default();
                    this.Commands.set(d.cmdName, d);
                    console.log(`[LOAD COMMAND] [LOADED] : ${d.cmdName}, ${d}`);
                })
                .catch( () => {
                    console.log(`[LOAD COMMANDS] [ERROR]`);
                });
        }
    }
}