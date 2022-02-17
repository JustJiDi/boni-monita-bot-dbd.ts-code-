const dbd = require("dbd.ts")
const version = require(`./package.json`).version
const client = new dbd.Bot({
  intents: [
		"GUILDS",
		"GUILD_MESSAGES",
    "DIRECT_MESSAGES",
    "GUILD_VOICE_STATES"
	],
  prefix: {
    mentionPrefix: false,
    prefixes: ["b!"]
  }
})

// Events
client.addEvent(["onMessage", "onInteraction"])

// Command format (basic) 

client.commands.load({
  path: "./commands/"
}) 

// functions
require('./funcs/funcs.js')(client)

// status
const status = new dbd.StatusManager(client) 

status.add({
  name: `nada`,
  presence: "online",
  type: "LISTENING", 
  time: 10
})

status.start()

// Connection
client.login(process.env["token"])

/*               24/7               */
const colors = require("colors")
const keepAlive = require('./server');
const Monitor = require('ping-monitor');

keepAlive();
const monitor = new Monitor({
  website: "https://bonimonita.justjidimodel.repl.co",
  title: 'boni`monita status',
  interval: 2
})

monitor.on('up', (res) => console.log(`|--------------[MONITOR]--------------|
| uptime started.
|-------------------------------------|\n`.brightGreen))
monitor.on('down', (res) => console.log(`|--------------[MONITOR]--------------|
| uptime has down.
${res.statusMessage}
|-------------------------------------|\n`.yellow))
monitor.on('stop', (website) => console.log(`|--------------[MONITOR]--------------|
| uptime has stopped
|-------------------------------------|\n`.red))
monitor.on('error', (error) => console.log(`|--------------[MONITOR]--------------|
| ${error}
|-------------------------------------|\n`.bgRed))
