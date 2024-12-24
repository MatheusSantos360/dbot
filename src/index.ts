import { config } from "dotenv";
import { Client } from "./Client";

config();

const client = new Client({ intents: 33283 });

client.registerEvents();
client.registerCommands();

client.login(process.env.botToken);
