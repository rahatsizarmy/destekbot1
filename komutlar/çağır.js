const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, message, args) => {
    if (!message.guild) {
    const embed = new Discord.RichEmbed() 

    .addField('Merak Etme Yakında Destke Ekibimiz Burada')
    
    .setColor(0x17FF03)
    return message.channel.sendEmbed(embed); } 
    let guild = message.guild 
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    let modlog = guild.channels.find('id', '433662317629145088');

    guild.channels.get(modlog.id).send("@here **Yeni Destek Talebi Var!**") 
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('❯ Yeni Çağrı','Yeni Çağrı Geldi Yetkililer İlgilenmeniz Gerekmektedir!')
      .addField('❯ Sizi Çağıran', `<@${message.author.id}>`)
    return guild.channels.get(modlog.id).sendEmbed(embed);
  };

  exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['çağır'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'çağır',
    description: 'Desteği Çağırır',
    usage: 'çağır'
  };
