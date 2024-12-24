import { readdirSync } from "fs";
import path from "path";
import { Client } from "../Client";
import { Event } from "../types/Event";

export const registerEvents = async (client: Client) => {
  const eventFiles = readdirSync(path.resolve(process.cwd(), "src", "events"));

  eventFiles.forEach(async (file) => {
    const eventPath = path.resolve(process.cwd(), "src", "events", file);
    const eventFile = await import(eventPath);
    const eventName = file.replace(".ts", "");

    const event: Event = eventFile[eventName];

    if (event.once) {
      client.once(event.name, event.run);
      return;
    }

    client.on(event.name, event.run);
  });
};
