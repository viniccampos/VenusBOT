const Discord = require("discord.js");

module.exports = {
    name: "membros",
    description: "Veja os membros da Vênus Motel",
    type: Discord.ApplicationCommandType.ChatInput,

    run: async (client, interaction) => {
        let embed = new Discord.EmbedBuilder().setDescription("Membros: \n\n"
            + "AllanV2\n"
            + "Bangbug\n"
            + "Beraldinho\n"
            + "LegendaryBEG\n"
            + "Maadz\n"
            + "Mari\n"
            + "Sniko\n"
            + "Valim\n"
            + "Vini_X");

        interaction.reply({ embeds: [embed] });
    }
}