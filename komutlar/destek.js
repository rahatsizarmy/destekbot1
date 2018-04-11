const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, message, args) => {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`destek` adlı komutu özel mesajlarda kullanamazsın.') } 
    let guild = message.guild 
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    let modlog = guild.channels.find('id', '433638952629436417');
    if (reason.length < 1) return message.reply('Destek Talebini  Yazmalısın');
    if (message.mentions.users.size < 1) return message.reply('**Beni Etiketlemen Lavım!').catch(console.error);
  
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
    permLevel: 2
  };
  
  exports.help = {
    name: 'destek',
    description: 'Desteği Çağırır',
    usage: 'destek'
  };
  
  
