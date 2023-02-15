const { ApplicationCommandType, EmbedBuilder } = require("discord.js");
module.exports = {
    name: "sobre",
    description: "Saiba mais sobre a Vênus",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "clan",
            description: "SubComando para saber dos membros",
            type: ApplicationCommandType.ChatInput,
        }
    ],
    run: async (client, interaction) => {
        let message;
        if (interaction.options._subcommand === "clan") {
            message = "O Clan VênusMotel surgiu em 2017 dentro de um servidor de Minecraft onde fizemos amizades e dominamos o server todo!";
        }
        let embed = new EmbedBuilder().setDescription(message);

        interaction.reply({ embeds: [embed] });
    }
}