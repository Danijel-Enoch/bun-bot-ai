import {
	Bot,
	Context,
	InlineKeyboard,
	InlineQueryResultBuilder,
	session,
} from "grammy";
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

bot.inlineQuery("/test", async (ctx) => {
	// Create a single inline query result.
	const result = InlineQueryResultBuilder.article(
		"id:grammy-website",
		"grammY",
		{
			reply_markup: new InlineKeyboard().url(
				"grammY website",
				"https://grammy.dev/"
			),
		}
	).text(
		`<b>grammY</b> is the best way to create your own Telegram bots.
  They even have a pretty website! 👇`,
		{ parse_mode: "HTML" }
	);

	// Answer the inline query.
	await ctx.answerInlineQuery(
		[result], // answer with result list
		{ cache_time: 30 * 24 * 3600 } // 30 days in seconds
	);
});

// Return empty result list for other queries.
bot.on("inline_query", (ctx) => {
	console.log(1111);
	ctx.reply("inline Working");
	ctx.answerInlineQuery([]);
});

bot.use(commandsComposer);
