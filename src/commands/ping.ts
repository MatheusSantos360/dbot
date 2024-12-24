import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';
import { SlashCommand } from '../types/SlashCommand';

export const ping: SlashCommand = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    async execute({ interaction }) {
        await interaction.reply('Pong!');
    },
};
