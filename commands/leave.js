import { SlashCommandBuilder } from 'discord.js';
import { getVoiceConnection } from '@discordjs/voice';


export const data = new SlashCommandBuilder()
    .setName('leave')
    .setDescription('demo leave');

export async function execute(interaction) {
    console.log(interaction);
    const connection = getVoiceConnection(interaction.guildId);
    connection.destroy();
    await interaction.reply('leaving channel');
}

