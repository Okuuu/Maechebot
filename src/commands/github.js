const { Command } = require('discord-akairo');

class PingCommand extends Command {
    constructor() {
        super('git', {
           aliases: ['git'] 
        });
    }

    exec(message) {
        console.log(message);
        return message.reply('https://github.com/Okuuu/Maechebot');
    }
}

module.exports = PingCommand;