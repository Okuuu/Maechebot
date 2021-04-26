import { Command } from 'discord-akairo';
import { Message } from 'discord.js';

export default class RoleInfoCommand extends Command {
    public constructor() {
        super('github', {
            aliases: ['github'],
            description: {
                content: 'get the git repository of the bot',
            },
        });
    }

    public async exec(message: Message): Promise<Message | Message[]> {
        return message.reply('https://github.com/Okuuu/Maechebot');
    }
}