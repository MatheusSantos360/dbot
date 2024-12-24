import { ClientEvents } from "discord.js";

export interface Event {
  name: keyof ClientEvents;
  once?: boolean;
  run: (...args: any[]) => void;
}
