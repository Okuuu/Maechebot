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
client.login("ODI0MzQzMDY2NjM0MzU0Njg4.YFt_Tg.-2JgHLilb0NEBHIK76jHBjcC2CI");
