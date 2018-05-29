const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.delete()

        let membericon = message.author.displayAvatarURL;
        let emcontent = args.join(" ");
        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor("#ff7096")
        .setThumbnail(membericon)
        .setDescription(emcontent);

        return message.channel.send(embed);
}

module.exports.help = {
  name: "embed"
}
