const Discord = require("discord.js");
var dateFormat = require('dateformat');
const ms = require("ms");


module.exports.run = async (bot, message, args) => {

    message.delete()

    const uptime = ms(message.client.uptime);

        let embed = new Discord.RichEmbed()
      .addField('Author', 'Nya#0001')
      .addField('Framework', 'patron.js')
      .addField('Memory', (process.memoryUsage().rss / 1048576).toFixed(2) + ' MB')
      .addField('Servers', (await message.client.shard.fetchClientValues('guilds.size')).reduce((a, b) => a + b, 0))
      .addField('Users', (await message.client.shard.fetchClientValues('users.size')).reduce((a, b) => a + b, 0))
      .addField('Uptime', 'Days: ' + uptime.days + '\nHours: ' + uptime.hours + '\nMinutes: ' + uptime.minutes, { inline: true });

        return message.channel.send(embed);
    }
  

  module.exports.help = {
    name: "stats"
  }
