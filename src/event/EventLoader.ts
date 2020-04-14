import { BotClient } from "../client/BotClient";
import { sync } from "glob";
import { resolve } from "path";
import { Event } from "./Event"

export class EventLoader {
    private readonly client: BotClient;
    public constructor(client: BotClient) {
        this.client = client;
    }

    /**
     * Loads events from the specified events dir
     */
    public async loadEvents(dir: string): Promise<any> {
        const a: string = resolve(dir);
        const b: string[] = sync(`${a}/**/*.js`);
        for (const c of b) {
            //delete the cached event in case we are reloading commands
            delete require.cache[require.resolve(c)];
            return await import(c.split('.js')[0])
                .then( (event) => {
                    let d: Event = new event.default();
                    this.client.Events.set(d.name, d);
                    this.client.on(d.name, d.execute.bind(null, this.client));
                    console.log(`[EVENT LOADER] : LOADED EVENT '${d.name.toUpperCase()}' SUCCESSFULLY`);
                })
                .catch( (err) => {
                    console.log(`[EVENT LOADER] : ERROR LOADING COMMAND FROM ${c.toUpperCase()}`, err);
                })
        }
    }
}