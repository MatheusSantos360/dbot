import { Event } from "../types/Event";

export const interactionCreate: Event<"interactionCreate"> = {
  name: "interactionCreate",
  run: async ({ client, args: [interaction] }) => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error("Error executing command:", error);
      await interaction.reply({
        content: "Error executing command.",
        ephemeral: true,
      });
    }
  },
};