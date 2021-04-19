const { Command } = require('discord-akairo');

class PingCommand extends Command {
    constructor() {
        super('promenade', {
           aliases: ['promenade'] 
        });
    }

    exec(message) {
        console.log(message);
        return message.reply('/me agite la queue frénétiquement');
    }
}

module.exports = PingCommand;