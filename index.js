const { Client, Collection, Events, GatewayIntentBits, InteractionType, ActivityType } = require('discord.js');
const path = require('node:path');
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