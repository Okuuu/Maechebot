import { Command } from 'discord-akairo';
import { Message } from 'discord.js';

export default class RoleInfoCommand extends Command {
    public constructor() {
        super('ping', {
            aliases: ['ping'],
            description: {
                content: 'Ping ?',
            },
        });
    }

    public async exec(message: Message): Promise<Message | Message[]> {
        return message.reply('Pong !');
    }
}