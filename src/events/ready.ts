import logfy, { blue, info } from "logfy-x";
import { Event } from "../types/Event";

export const ready: Event = {
  name: "ready",
  once: true,
  run: () => {
    logfy("\n")
    info("Bot is online!", [
      `${blue("Date")}: ${new Date().toLocaleDateString()}`,
      `${blue("Time")}: ${new Date().toLocaleTimeString()}`,
    ]);
  },
};
