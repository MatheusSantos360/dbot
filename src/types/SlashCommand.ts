import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';
import { Client } from "../Client"

interface ExecuteOptions {
    client: Client;
    interaction: CommandInteraction;
}

export interface SlashCommand {
    data: SlashCommandBuilder;
    execute: (options: ExecuteOptions) => Promise<void>;
}