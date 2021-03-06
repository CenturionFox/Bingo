const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const GIFEncoder = require('gifencoder');
const can = require('canvas')
const { createCanvas } = require('canvas');

const client = new Discord.Client();
const config = require("./config.json");
client.config = config;

client.on("ready", () => {
 console.log("Bot successfully loaded!");
});

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();
// handles commands like bingo
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

client.login(config.token);
