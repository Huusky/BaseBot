export type BotOptions = {
    token: string;
    owner?: string | string[];
    commandsDir: string;
    eventsDir: string;
    storageCString?: string;
};
