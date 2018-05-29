const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.delete()

  let boticon = bot.user.displayAvatarURL;
  let helpembed = new Discord.RichEmbed()
  .setTitle("**Kanna help**")
  .setColor("#ff7096")
  .setThumbnail(boticon)
  .addField("This is the Kanna bot","Bot prefix is %, example: %help")
  .addField("Utility")
  .addField("help", "Tells you info about the bot and it's commands")
  .addField("botinfo", "Tells you info about the bot")
  .addField("serverinfo", "Tells you info about the server")
  .addField("myinfo", "Tells you about your account");

  return message.channel.send(helpembed);
}

module.exports.help = {
  name: "uhelp"
}
