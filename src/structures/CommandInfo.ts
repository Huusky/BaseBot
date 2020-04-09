import * as Discord from 'discord.js';

export interface CommandInfo {
    cmdName: string;
    cmdDesc: string;
    cmdUsage?: string;
    cmdHasArgs: boolean;
    cmdAliases?: string[];
    cmdHidden?: boolean;
    cmdEnabled: boolean;
    cmdClientPermissions?: Discord.PermissionResolvable[];
    cmdUserPermissions?: Discord.PermissionResolvable[];
    cmdRoles?: Discord.RoleResolvable[];
    cmdOwnerOnly?: boolean;
}