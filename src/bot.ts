import { Bot, Context, session } from "grammy";
import { commandsComposer } from "../commands";
import { predictMarkeCapConversation } from "../conversations";
const { BOT_TOKEN: token = "" } = process.env;

type MyContext = Context;
export const bot = new Bot<Context>(token);

// attach all middleware
bot.api.setMyCommands([
	{
		command: "start",
		description: "get Started with insight gpt bt",
	},
	{ command: "help", description: "Contact our Help Channel" },
	{
		command: "insight",
		description: "Get GPT insight Rating on Degen Projects",
	},
	{
		command: "predict",
		description: "Predict Marketcaps",
	},
]);

bot.use(commandsComposer);
