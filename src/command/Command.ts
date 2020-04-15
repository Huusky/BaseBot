import { CommandInfo } from '../types/CommandInfo';
import * as Discord from 'discord.js';
import { Client } from '../client/Client';

/**
 * Command class which all commands extend
 * @param {CommandInfo} info Object containing required command properties
 */
export abstract class Command {
    public cmdName!: string;
    public cmdDesc!: string;
    public cmdUsage?: string;
    public cmdHasArgs!: boolean;
    public cmdAliases?: string[];
    public cmdHidden?: boolean;
    public cmdEnabled!: boolean;
    public cmdClientPermissions?: Discord.PermissionResolvable[];
    public cmdUserPermissions?: Discord.PermissionResolvable[];
    public cmdRoles?: Discord.RoleResolvable[];
    public cmdOwnerOnly?: boolean;
    public constructor(info: CommandInfo) {
        Object.assign(this, info);
    }

    /**
     * Function responsible for executing a command
     * @param client BotClient object
     * @param message The message that invoked the command
     * @param args The arguments that were pulled from the invoking message
     */
    public abstract execute(
        client: Client,
        message: Discord.Message,
        args: string[]
    ): Promise<any>;

    /**
     * Enables the command
     */
    public enable(): void {
        this.cmdEnabled = true;
    }
    /**
     * Disabled the command
     */
    public disable(): void {
        this.cmdEnabled = false;
    }
}
