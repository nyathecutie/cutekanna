const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(message.author.id !== '413062327168925696') return;

    let patted = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    message.delete()
    if(!patted)
    return message.reply("Please mention a valid member of this server");

patted.sendMessage({files: [ "./spam/1.png", "./spam/2.png", "./spam/3.png", "./spam/4.png", "./spam/5.png", "./spam/6.png" ]
});
}

module.exports.help = {
  name: "spamtrap"
}
