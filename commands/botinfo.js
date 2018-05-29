const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      message.delete()
      
        let boticon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setTitle("**Bot Information**")
        .setColor("#ff7096")
        .setThumbnail(boticon)
        .addField("Bot Name", bot.user.username)
        .addField("Created On", bot.user.createdAt);

        return message.channel.send(botembed);
}

module.exports.help = {
  name: "botinfo"
}
