const { Client, Collection, Events, GatewayIntentBits, InteractionType, ActivityType } = require('discord.js');
const axios = require('axios')
const express = require('express');
const client = new Client({ intents: ["Guilds", "GuildMembers", "MessageContent", "GuildMessages"] });
require('dotenv').config()
module.exports = client;

client.on(Events.InteractionCreate, interaction => {
    if (interaction.type === InteractionType.ApplicationCommand) {

        const cmd = client.slashCommands.get(interaction.commandName);

        if (!cmd) return interaction.reply(`Error`);

        interaction["member"] = interaction.guild.members.cache.get(interaction.user.id);

        cmd.run(client, interaction)

    }
})

const app = express();
// app.use(bodyParser.json());

const discord_api = axios.create({
  baseURL: 'https://discord.com/api/',
  timeout: 3000,
  headers: {
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
	"Access-Control-Allow-Headers": "Authorization",
	"Authorization": `Bot ${process.env.ACCESS_TOKEN}`
  }
});

app.get('/', async (req,res) =>{
    return res.send('Follow documentation ')
  })

client.on('ready', () => {
    console.log(`${client.user.username} está online!`);

    client.user.setActivity({
        name: 'Em Desenvolvimento',
        type: ActivityType.Playing
    });
});

client.slashCommands = new Collection();
require('./src/handler')(client);
client.login(process.env.ACCESS_TOKEN);

app.listen(8999, () => {

})