import * as Discord from 'discord.js';

export const bot = new Discord.Client({
	intents: [
		Discord.IntentsBitField.Flags.Guilds,
		Discord.IntentsBitField.Flags.GuildMembers,
		Discord.IntentsBitField.Flags.GuildMessages,
		Discord.IntentsBitField.Flags.DirectMessages,
		Discord.IntentsBitField.Flags.GuildMessageReactions,
		Discord.IntentsBitField.Flags.MessageContent,
	],
});
