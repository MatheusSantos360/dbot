import { SlashCommandBuilder } from "@discordjs/builders";
import { ExecuteOptions, SlashCommand } from "../types/SlashCommand";

export const ping: SlashCommand = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  async execute({ interaction }: ExecuteOptions) {
    await interaction.reply("Pong!");
  },
};
