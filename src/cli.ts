#!/usr/bin/env node

import argv from "@prokopschield/argv";

import { bot } from "./bot";

bot.login(argv.expectMutate(["token"]).token);
