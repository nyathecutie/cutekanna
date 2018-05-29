const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete()
// s
//let mem1 = message.guild.members.get(args[0]));
//let mem2 = message.guild.members.get(args[1]));

//if(!mem1) return message.channel.send("You need to mention 2 people.");
//if(!mem2) return message.channel.send("You need to mention 2 people.");

  //      let memicon1 = mem1.user.displayAvatarURL;
    //    let memicon2 = mem2.user.displayAvatarURL;
      //  let memname1 = mem1.user.username
        //let memname2 = mem1.user.username
        //let embed = new Discord.RichEmbed()
//        .setAuthor(message.author.username)
  //      .setColor("#ff7096")
    //    .setDescription(`**${memname1} has been shipped with ${memname2}**`);
      //  .setImage(memicon1)
        //.setImage(memicon2);


        //return message.channel.send(embed);
}

module.exports.help = {
  name: "ship"
}