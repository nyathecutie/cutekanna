const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.delete()

        let user = message.author;
        let memicon = user.displayAvatarURL;
        let memembed = new Discord.RichEmbed()
        .setTitle("**This is your info**")
        .setColor("#ff7096")
        .setThumbnail(memicon)
        .addField("User", user.user)
        .addField("Username", user.username)
        .addField("Created On", user.createdAt)
        .addField("Tag", user.tag)
        .addField("Bot", user.bot)
        .addField("ID", user.id);

        return message.channel.send(memembed);
}

module.exports.help = {
  name: "myinfo"
}
