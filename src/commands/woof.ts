import { Command } from 'discord-akairo';
import { Message } from 'discord.js';

export default class RoleInfoCommand extends Command {
    public constructor() {
        super('promenade', {
            aliases: ['promenade'],
            description: {
                content: 'On va se promener ?',
            },
        });
    }

    public async exec(message: Message): Promise<Message | Message[]> {
        return message.reply('On va se promener ?!');
    }
}