import { ClientEvents } from "discord.js";
import { Client } from "../Client";

type EventArguments<K extends keyof ClientEvents> = {
  client: Client;
  args: ClientEvents[K];
};

export interface Event<K extends keyof ClientEvents = keyof ClientEvents> {
  name: K;
  once?: boolean;
  run: (args: EventArguments<K>) => void;
}