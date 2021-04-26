import { AkairoClient, CommandHandler, InhibitorHandler, ListenerHandler } from 'discord-akairo';
import { environment } from './env';
import { Message } from 'discord.js';

declare module 'discord-akairo' {
  interface AkairoClient {
    commandHandler: CommandHandler;
    inhibitorHandler: InhibitorHandler;
    listenerHandler: ListenerHandler,
  }
}

export class Client extends AkairoClient {
  commandHandler: CommandHandler;
  readonly inhibitorHandler: InhibitorHandler;
  listenerHandler: ListenerHandler;
  constructor() {
    super();
    this.commandHandler = new CommandHandler(this, {
      directory: __dirname + '/commands',
      prefix: '!',
      loadFilter(file: any) {
        return file.endsWith('.js');
      },
    });

    this.inhibitorHandler = new InhibitorHandler(this, {
      directory: __dirname + '/inhibitors',
    });

    this.listenerHandler = new ListenerHandler(this, {
      directory: __dirname + '/listeners/'
    });

    this.commandHandler.loadAll();
    this.commandHandler.useInhibitorHandler(this.inhibitorHandler);
    this.commandHandler.useListenerHandler(this.listenerHandler);
    this.listenerHandler.loadAll();
    this.inhibitorHandler.loadAll();


  }
}
(async () => {
  try {
    await new Client().login(environment.token);
    console.log('bot awake');
  } catch (e) {
    console.error(e);
  }
})();