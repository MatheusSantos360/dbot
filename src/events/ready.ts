import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import { blue, info, success } from "logfy-x";
import { config } from "../../config";
import { Event } from "../types/Event";

export const ready: Event<"ready"> = {
  name: "ready",
  once: true,
  run: async ({ client }) => {
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

      success(
        "Slash commands",
        "Successfully reloaded application (/) commands."
      );
    } catch (error) {
      console.error(error);
    }
  },
};
