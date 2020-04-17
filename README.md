# BaseBot - A basic Discord bot framework

BaseBot is a Discord bot framework written in TypeScript that supports commands and custom event handlers. Storage handling is a current work-in-progress.

## Installation
---
Installation is currently manual, NPM package coming soon.


## Basic Use
---
```typescript
import * as BaseBot from 'basebot';

const client = new BaseBot.Client({
    "token": "TOKEN HERE",
    "commandsDir": "COMMANDS DIR HERE",
    "eventsDir": "EVENTS DIR HERE"
});

client.init(); //LOAD COMMANDS AND EVENTS
// DO ANYTHING ELSE YOU NEED HERE
client.login() //LOGIN BOT
```