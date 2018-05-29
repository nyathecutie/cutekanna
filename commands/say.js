const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {



    message.delete()



        let saycontent = args.join(" ");


return message.channel.send(saycontent);
}

module.exports.help = {
  name: "say"
}
