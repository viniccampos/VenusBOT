const Discord = require("discord.js");

module.exports = {
    name: "sobre",
    description: "Saiba mais sobre a Vênus",
    type: Discord.ApplicationCommandType.ChatInput,

    run: async (client, interaction) => {
        let embed = new Discord.EmbedBuilder().setDescription(
            "A Vênus surgiu em 2017 dentro de um servidor de Minecraft onde fizemos amizades e dominamos o server todo!");

            interaction.reply({ embeds: [embed] });
    }
}