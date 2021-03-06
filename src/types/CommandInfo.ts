import { PermissionResolvable, RoleResolvable } from 'discord.js';

export type CommandInfo = {
    cmdName: string;
    cmdDesc: string;
    cmdUsage?: string;
    cmdHasArgs: boolean;
    cmdAliases?: string[];
    cmdHidden?: boolean;
    cmdEnabled: boolean;
    cmdClientPermissions?: PermissionResolvable[];
    cmdUserPermissions?: PermissionResolvable[];
    cmdRoles?: RoleResolvable[];
    cmdOwnerOnly?: boolean;
};
