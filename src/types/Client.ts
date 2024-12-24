import { Client } from "discord.js";

export type ClientType = Client & {
  registerEvents: () => void;
  registerCommands: () => void;
}