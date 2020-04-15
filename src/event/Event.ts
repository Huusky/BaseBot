export enum EventNames {
    channelCreate = 'channelCreate',
    channelDelete = 'channelDelete',
    channelPinsUpdate = 'channelPinsUpdate',
    channelUpdate = 'channelUpdate',
    debug = 'debug',
    warn = 'warn',
    disconnect = 'disconnect',
    emojiCreate = 'emojiCreate',
    emojiDelete = 'emojiDelete',
    emojiUpdate = 'emojiUpdate',
    error = 'error',
    guildBanAdd = 'guildBanAdd',
    guildBanRemove = 'guildBanRemove',
    guildCreate = 'guildCreate',
    guildDelete = 'guildDelete',
    guildUnavailable = 'guildUnavailable',
    guildIntegrationsUpdate = 'guildIntegrationsUpdate',
    guildMemberAdd = 'guildMemberAdd',
    guildMemberAvailable = 'guildMemberAvailable',
    guildMemberRemove = 'guildMemberRemove',
    guildMembersChunk = 'guildMembersChunk',
    guildMemberSpeaking = 'guildMemberSpeaking',
    guildMemberUpdate = 'guildMemberUpdate',
    guildUpdate = 'guildUpdate',
    inviteCreate = 'inviteCreate',
    inviteDelete = 'inviteDelete',
    message = 'message',
    messageDelete = 'messageDelete',
    messageReactionRemoveAll = 'messageReactionRemoveAll',
    messageReactionRemoveEmoji = 'messageReactionRemoveEmoji',
    messageDeleteBulk = 'messageDeleteBulk',
    messageReactionAdd = 'messageReactionAdd',
    messageReactionRemove = 'messageReactionRemove',
    messageUpdate = 'messageUpdate',
    presenceUpdate = 'presenceUpdate',
    rateLimit = 'rateLimit',
    ready = 'ready',
    invalidated = 'invalidated',
    roleCreate = 'roleCreate',
    roleDelete = 'roleDelete',
    roleUpdate = 'roleUpdate',
    typingStart = 'typingStart',
    userUpdate = 'userUpdate',
    voiceStateUpdate = 'voiceStateUpdate',
    webhookUpdate = 'webhookUpdate',
    shardDisconnect = 'shardDisconnect',
    shardError = 'shardError',
    shardReady = 'shardReady',
    shardReconnecting = 'shardReconnecting',
    shardResume = 'shardResume',
}

/**
 * Event class which all events extend
 * @param {EventNames} name String containing the name of the event
 */
export abstract class Event {
    public name: EventNames;

    constructor(name: EventNames) {
        this.name = name;
    }

    /**
     * Function responsible for executing an event
     * @param args The args the event handler will receive
     */
    public abstract async execute(...args: any): Promise<any>;
}
