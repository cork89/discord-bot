import { Client, Events, GatewayIntentBits} from 'discord.js';
import { config } from 'dotenv';
import * as apparently from './commands/apparently.js';
import * as join from './commands/join.js';
import * as leave from './commands/leave.js';

config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates],
});

client.once(Events.ClientReady, () => console.log("hello" + client.user.tag));

client.login(process.env.TOKEN);


async function handleInteraction(interaction) {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === 'apparently') {
        await apparently.execute(interaction);
    } else if (interaction.commandName === 'join') {
        await join.execute(interaction);
    } else if (interaction.commandName === 'leave') {
        await leave.execute(interaction);
    }
}

client.on(Events.InteractionCreate, handleInteraction);