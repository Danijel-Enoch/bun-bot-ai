import { Bot, Context, session } from "grammy";
import {
	type Conversation,
	type ConversationFlavor,
	conversations,
	createConversation,
} from "@grammyjs/conversations";
import { commandsComposer } from "../commands";
import { predictMarkeCapConversation } from "../conversations";
const { BOT_TOKEN: token = "" } = process.env;

type MyContext = Context & ConversationFlavor;
type MyConversation = Conversation<MyContext>; // Set your token in the vercel environment variable
export const bot = new Bot<MyContext>(token);

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
]);

bot.use(conversations());

bot.use(commandsComposer);
bot.use(
	createConversation(
		predictMarkeCapConversation,
		"predictMarkeCapConversation"
	)
);
