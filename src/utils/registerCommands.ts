import { readdirSync, statSync } from "fs";
import { join } from "path";
import { Client } from "../Client";
import { SlashCommand } from "../types/SlashCommand";

async function registerCommands(client: Client): Promise<void> {
  const commandsPath = join(__dirname, "..", "commands");
  const commandFiles = getAllFiles(commandsPath, ".ts");

  for (const file of commandFiles) {
    const commandModule = await import(file);
    const command = Object.values(commandModule)[0] as Partial<SlashCommand>;

    if (command?.data && command?.execute) {
      client.commands.set(command.data.name, command);
    } else {
      console.log(
        `[WARN] The command at ${file} is missing a required "data" or "execute" property.`
      );
    }
  }
}

function getAllFiles(
  dirPath: string,
  extension: string,
  arrayOfFiles: string[] = []
): string[] {
  const files = readdirSync(dirPath);

  files.forEach((file) => {
    if (statSync(join(dirPath, file)).isDirectory()) {
      arrayOfFiles = getAllFiles(join(dirPath, file), extension, arrayOfFiles);
    } else if (file.endsWith(extension)) {
      arrayOfFiles.push(join(dirPath, file));
    }
  });

  return arrayOfFiles;
}

export { registerCommands };
