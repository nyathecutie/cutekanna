const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.delete()

  let boticon = bot.user.displayAvatarURL;
  let helpembed = new Discord.RichEmbed()
  .setTitle("**Kanna help**")
  .setColor("#ff7096")
  .setThumbnail(boticon)
  .addField("This is the Kanna bot","Bot prefix is %, example: %help")
  .addField("Admin")
  .addField("kick", "Kicks the person. You must set a reason or it will not work. Usage: %kick <user> <reason>")
  .addField("ban", "Bans the person. You must set a reason or it will not work. Usage: %ban <user> <reason>")
  .addField("mute", "Mutes the person. You must set a time or it will not work. Usage: %mute <user> <time>")
  .addField("purge", "Purges messages. Max 100 messages at once. Usage: %purge <amount>");

  return message.channel.send(helpembed);
}

module.exports.help = {
  name: "ahelp"
}
