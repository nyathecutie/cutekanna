const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let boticon = bot.user.displayAvatarURL;
  let helpembed = new Discord.RichEmbed()
  .setTitle("**Kanna help**")
  .setColor("#ff7096")
  .setThumbnail(boticon)
  .addField("This is the Kanna bot","Bot prefix is %, example: %help")
  .addField("Utility", "%uhelp")
  .addField("Admin", "%ahelp")
  .addField("Fun", "%fhelp")
  .addField("Misc", "%mhelp");

  return message.channel.send(helpembed);
}

module.exports.help = {
  name: "help"
}
