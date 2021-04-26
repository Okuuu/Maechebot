import { Inhibitor } from 'discord-akairo';
import { Message } from 'discord.js';

export default class BlacklistInhibitor extends Inhibitor {
    public constructor() {
        super('blacklist', {
            reason: 'blacklist'
        });
    }

    public async exec(message: Message): Promise<boolean> {
        console.log('triggered');
        return true;
        const blacklist: Array<string> = ['toto', 'tata'];
        console.log('blacklist', blacklist);
        if (!blacklist) return false;
        return blacklist.includes(message.author!.id);
    }
}