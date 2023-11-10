import {
	type Conversation,
	type ConversationFlavor,
	conversations,
	createConversation,
} from "@grammyjs/conversations";
import { Bot, CommandContext, Context } from "grammy";

type MyContext = Context & ConversationFlavor;
type MyConversation = Conversation<MyContext>;

export async function predictMarkeCapConversation(
	conversation: MyConversation,
	ctx: MyContext
) {
	await ctx.reply("Enter token Name: ");
	const name = await conversation.waitFor(":text");
	await ctx.reply("Enter token TotalSupply: ");
	const totalSupply = await conversation.waitFor(":text");
	await ctx.reply("Enter token Holder: ");
	const holders = await conversation.waitFor(":text");
	await ctx.reply("Enter token LP locker time Duration: ");
	const lpLockTime = await conversation.waitFor(":text");
	await ctx.reply("Enter token number of averag Callers: ");
	const Callers = await conversation.waitFor(":text");
	//titleCtx.msg.text
	await ctx.reply("Enter token current MarketCap: ");
	const marketCap = await conversation.waitFor(":text");

	// let url = "https://ai-api-gilt.vercel.app/predict";

	// let options = {
	// 	method: "POST",
	// 	headers: {
	// 		"Content-Type": "application/json",
	// 		"User-Agent": "insomnia/8.3.0",
	// 	},
	// 	body: `{"tokenName":"${name.msg.text.toString()}","symbol":"${name.msg.text.toString()}","totalSupply":${parseInt(
	// 		totalSupply.msg.text.toString()
	// 	)},"holders":${parseInt(
	// 		holders.msg.text.toString()
	// 	)},"lpLocktime":${parseInt(
	// 		lpLockTime.msg.text.toString()
	// 	)},"degenInfluencers":${parseInt(
	// 		Callers.msg.text.toString()
	// 	)},"marketCap":${parseInt(marketCap.msg.text.toString())}}`,
	// };

	// fetch(url, options)
	// 	.then((res) => res.json())
	// 	.then((json) => console.log(json))
	// 	.catch((err) => console.error("error:" + err));

	await ctx.reply("Your Prredict is : \n DYOR");
}
