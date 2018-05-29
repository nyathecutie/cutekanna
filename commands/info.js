const Discord = require("discord.js");
var dateFormat = require('dateformat');
var now = new Date();


module.exports.run = async (bot, message, args) => {

    message.delete()

        let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));


        if(!user)
        user = message.guild.member(mesage.author() || message.guild.members.get(args[0]));

        let createdOn = dateFormat(user.user.createdAt, "dddd, mmmm dS, yyyy")
        let joinedOn = dateFormat(user.user.joinedTimestamp, "dddd, mmmm dS, yyyy")

        let memicon = user.displayAvatarURL;
        let memembed = new Discord.RichEmbed()
        .setColor("#ff7096")
        .setThumbnail(memicon)
        .addField("Nickname", user.displayName)
        .addField("User", user.user)
        .addField("Username", user.user.username)
        .addField("Created On", createdOn)
        .addField("Joined On", joinedOn)
        .addField("Tag", user.user.tag)
        .addField("Bot", user.user.bot)
        .addField("ID", user.user.id);

        return message.channel.send(`This is ${user}'s info`, memembed);
}

module.exports.help = {
  name: "info"
}
