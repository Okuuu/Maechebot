const { AkairoClient, CommandHandler } = require('discord-akairo');

class MyClient extends AkairoClient {
    constructor() {
        super({
            ownerID: '110965457862828032'
        }, {
            disableMentions: 'true'
        });
        this.commandHandler = new CommandHandler(this, {
            directory: './commands/',
            prefix: '' // or ['?', '!']
        });
        this.commandHandler.loadAll();
    }
}

const client = new MyClient();
client.login(""); //enter token here

