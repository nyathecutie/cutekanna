
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete()

    if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("You don't have permission to do that.")

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    prefixes[message.guild.id] = {
      prefixes: args[0]
    };

    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
      if (err) console.log(err)
    });



}

module.exports.help = {
  name: ""
}
