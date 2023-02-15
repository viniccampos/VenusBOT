const { ActivityType } = require("discord.js");
const Discord = require("discord.js");
const Client = new Discord.Client({ intents: ["Guilds", "GuildMembers", "MessageContent", "GuildMessages"] });
const Config = require("./config.json");
module.exports = Client;

Client.on('interactionCreate', (interaction) => {

    if (interaction.type === Discord.InteractionType.ApplicationCommand) {

        const cmd = Client.slashCommands.get(interaction.commandName);

        if (!cmd) return interaction.reply(`Error`);

        interaction["member"] = interaction.guild.members.cache.get(interaction.user.id);

        cmd.run(Client, interaction)

    }
})

Client.on('ready', () => {
    console.log(`${Client.user.username} está online!`);

    Client.user.setActivity({
        name: 'Em Desenvolvimento',
        type: ActivityType.Playing
    });
});

Client.slashCommands = new Discord.Collection();
require('./handler')(Client);
Client.login(Config.token);