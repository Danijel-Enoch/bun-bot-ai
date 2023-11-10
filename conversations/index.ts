import { Bot, CommandContext, Context } from "grammy";

type MyContext = Context;

export async function predictMarkeCapConversation(ctx: MyContext) {
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
