import { Bot } from "grammy";
import { commandsComposer } from "../commands";
const { BOT_TOKEN: token = "" } = process.env;

// Set your token in the vercel environment variable
export const bot = new Bot(token);

// attach all middleware
bot.api.setMyCommands([
	{
		command: "start",
		description: "get Started with insight gpt bt",
	},
	{ command: "help", description: "Contact our Help Channel" },
]);

bot.use(commandsComposer);
