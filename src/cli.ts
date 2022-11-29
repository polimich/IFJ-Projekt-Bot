#!/usr/bin/env node

import argv from "@prokopschield/argv";

import { bot } from "./bot";
import loader from "./modules/loader";

bot.login(process.env.token || argv.expectMutate(["token"]).token);

bot.on("ready", (bot) => loader(bot));
