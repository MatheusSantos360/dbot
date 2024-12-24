import { config } from "dotenv";
import { Client } from "./Client";
import { blue } from "logfy-x";

console.time(blue("Uptime"));

config();

const client = new Client({ intents: 33283 });

client.registerEvents();
client.registerCommands();

client.login(process.env.botToken);

console.timeEnd(blue("Uptime"))