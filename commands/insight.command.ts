import { Bot, CommandContext, Context } from "grammy";

export async function insightCommand(_ctx: CommandContext<Context>) {
	_ctx.reply(
		`Welcome to Insight GPT BOT \n Get AI based Project Score Rating`
	);
}
