import { SlashCommandBuilder } from 'discord.js';
import { join } from 'node:path';
import { createReadStream } from 'node:fs';
// import { dirname } from 'path';
import { getVoiceConnection, VoiceConnectionStatus, createAudioPlayer, createAudioResource } from '@discordjs/voice';
import * as join2 from './join.js';



export const data = new SlashCommandBuilder()
    .setName('apparently')
    .setDescription('demo apparently');

export async function execute(interaction) {
    const connection = getVoiceConnection(interaction.guildId);
    let resource = createAudioResource(createReadStream(join('./commands', 'apparently.mp3')));
    join2.player.play(resource);
    // console.log(connection);
    // connection.subscribe(join2.player);
    await interaction.reply('apparently');
}


