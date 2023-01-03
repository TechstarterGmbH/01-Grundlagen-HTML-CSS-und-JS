/**
 * https://www.npmjs.com/package/chalk
 * https://www.npmjs.com/package/node-emoji
 * https://raw.githubusercontent.com/omnidan/node-emoji/master/lib/emoji.json
 * https://day.js.org/docs/en/installation/node-js
 */

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import chalk from 'chalk'
import emoji from 'node-emoji'
import dayjs from 'dayjs' // ES 2015

let day = dayjs().format('DD.MM.YYYY')
let time = dayjs().format('HH:mm:ss');

console.log(`[${day}] ${time}`);


const line = readline.createInterface({input, output})
const antwort = await line.question("Wie heißt Du? \n")
let styledAntwort = chalk.red.bgWhite.underline(antwort)
console.log(`Hallo ${styledAntwort} ${emoji.get('grinning')}`)
line.close();

