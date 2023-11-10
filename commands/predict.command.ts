import { Bot, CommandContext, Context } from "grammy";
import {
	type Conversation,
	type ConversationFlavor,
	conversations,
	createConversation,
} from "@grammyjs/conversations";

type MyContext = Context & ConversationFlavor;
type MyConversation = Conversation<MyContext>;

export async function helpCommand(_ctx: CommandContext<MyContext>) {
	_ctx.reply(`Predict the Furture Marketcap of a Token `);
	_ctx.conversation.enter("predictMarkeCapConversation");
}
