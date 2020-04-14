import { Guild } from "discord.js";

export interface GuildSettings {
    [key: string]: any;
    guildId: number;
    prefix: string;
}