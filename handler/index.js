const fs = require("fs")

module.exports = async (Client) => {

    const SlashsArray = []

    fs.readdir(`./commands`, (error, folder) => {
        folder.forEach(subfolder => {
            fs.readdir(`./commands/${subfolder}/`, (error, files) => {
                files.forEach(files => {

                    if (!files?.endsWith('.js')) return;
                    files = require(`../commands/${subfolder}/${files}`);
                    if (!files?.name) return;
                    Client.slashCommands.set(files?.name, files);

                    SlashsArray.push(files)
                });
            });
        });
    });
    Client.on("ready", async () => {
        Client.guilds.cache.forEach(guild => guild.commands.set(SlashsArray))
    });
};

