import { Client as BotClient, ClientOptions, Collection } from "discord.js";
import { ClientType } from "./types/Client";
import { registerEvents } from "./utils/registerEvents";
import { registerCommands } from "./utils/registerCommands";

export class Client extends BotClient implements ClientType {
  constructor(clientOptions: ClientOptions) {
    super(clientOptions)
  }

  public commands: Collection<string, any> = new Collection();

  registerEvents() {
    registerEvents(this)
  }

  registerCommands() {
    registerCommands(this)
  };
}
