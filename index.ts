import { Client, GatewayIntentBits, IntentsBitField } from "discord.js";
import { config } from "dotenv";

config();

const client = new Client({ intents: 33283 });

client.on("ready", () => {
  console.log("Bot online!");
});

client.login(process.env.botToken);
