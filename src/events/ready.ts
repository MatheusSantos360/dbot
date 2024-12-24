import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import logfy, { blue, info, success } from "logfy-x";
import { Client } from "../Client";
import { Event } from "../types/Event";
import { config } from "../../config";

export const ready: Event = {
  name: "ready",
  once: true,
  run: async (client: Client) => {
    info("Bot is online!", [
      `${blue("Date")}: ${new Date().toLocaleDateString()}`,
      `${blue("Time")}: ${new Date().toLocaleTimeString()}`,
    ]);

    const token = process.env.botToken!;

    const rest = new REST({ version: "9" }).setToken(token);

    try {
      info("Slash commands", "Started refreshing application (/) commands.");

      await rest.put(
        Routes.applicationGuildCommands(config.clientID, config.guildID), // For guild commands
        { body: client.commands.map((cmd) => cmd.data.toJSON()) }
      );

      // For global commands, use: Routes.applicationCommands(clientId)

      success("Slash commands", "Successfully reloaded application (/) commands.");
    } catch (error) {
      console.error(error);
    }
  },
};
