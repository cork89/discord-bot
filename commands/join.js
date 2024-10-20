import { SlashCommandBuilder } from 'discord.js';
import { joinVoiceChannel, createAudioPlayer } from '@discordjs/voice';

export const player = createAudioPlayer();

export const data = new SlashCommandBuilder()
    .setName('join')
    .setDescription('demo join');

export async function execute(interaction) {
    // console.log(interaction);

    joinVoiceChannel({
        channelId: interaction.channel.id,
        guildId: interaction.channel.guild.id,
        adapterCreator: interaction.channel.guild.voiceAdapterCreator,
        selfDeaf: false,
    }).subscribe(player);
    await interaction.reply('joining channel');
}

