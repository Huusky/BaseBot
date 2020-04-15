import { Client } from '../client/Client';
import { sync } from 'glob';
import { resolve } from 'path';
import { Command } from './Command';

export class CommandLoader {
    private readonly client: Client;
    public constructor(client: Client) {
        this.client = client;
    }

    /**
     * Loads commands from the specified commands dir
     */
    public async loadCommands(dir: string): Promise<any> {
        const a: string = resolve(dir);
        const b: string[] = sync(`${a}/**/*.js`);
        for (const c of b) {
            // delete the cached command in case that we are reloading commands
            delete require.cache[require.resolve(c)];
            await import(c.split('.js')[0])
                .then((command) => {
                    const d: Command = new command.default();
                    this.client.Commands.set(d.cmdName, d);
                    console.log(
                        `[COMMAND LOADER] : LOADED COMMAND '${d.cmdName.toUpperCase()}' SUCCESSFULLY`
                    );
                })
                .catch((err) => {
                    console.log(
                        `[COMMAND LOADER] : ERROR LOADING COMMAND FROM ${c.toUpperCase()}`,
                        err
                    );
                });
        }
    }
}
