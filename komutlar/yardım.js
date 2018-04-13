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
    let modlog = guild.channels.find('id', '433688839765098497');
    if (reason.length < 1) return message.reply('Destek Talebini  Yazmalısın');
    if (message.mentions.users.size < 1) return message.reply('Beni Etiketleyerek Kullan').catch(console.error);

    guild.channels.get(modlog.id).send("@here **Yeni Destek Talebi Var!**") 
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('Uyanın Yeni Çağrı Geldi','Hadi Hadi Hadi! ')
      .addField('Çağıran:', `${message.author.username}#${message.author.discriminator}`)
      .addField('Taleb:', reason);
    return guild.channels.get(modlog.id).sendEmbed(embed);
  };

  exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['destek'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'yardım',
    description: 'Desteği Çağırır',
    usage: 'yardım'
  };
