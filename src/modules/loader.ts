import { Client } from "discord.js";
import fs from "fs";

const symbol_no_recursion = Symbol("loader-no-recursion");

export default async function loader(bot: Client<true>, symbol?: symbol) {
	if (symbol !== symbol_no_recursion) {
		for (const module_name of await fs.promises.readdir(__dirname)) {
			if (module_name.endsWith(".js")) {
				require(__dirname + "/" + module_name).default(
					bot,
					symbol_no_recursion
				);
			}
		}
	}
}
