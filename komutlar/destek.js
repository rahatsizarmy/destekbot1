const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, message, args) => {
    if (!message.guild) {
    const embed = new Discord.RichEmbed() 

    .addField('Merak Etme Yakında Destke Ekibimiz Burada')
    
    .setColor(0xff0000)

    return message.channel.sendEmbed(embed)
    return message.author.sendEmbed(ozelmesajuyari); } 
    let guild = message.guild 
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    let modlog = guild.channels.find('id', '433638952629436417');
  
    message.channel.sendMessage('@everyone')
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('Uyanın Yeni Çağrı Geldi','Hadi Hadi Hadi! ')
      .addField('Kullanıcı:', `${message.author.username}#${message.author.discriminator}`)
    return guild.channels.get(modlog.id).sendEmbed(embed);
  };

  exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['destek'],
    permLevel: 2
  };
  
  exports.help = {
    name: 'destek',
    description: 'Desteği Çağırır',
    usage: 'destek'
  };
  
  