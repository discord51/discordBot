client.on('message', message => {
  if (message.content === ('%bot')) {
  message.channel.send({
      embed: new Discord.RichEmbed()
          .setAuthor(client.user.username,client.user.avatarURL)
          .setThumbnail(client.user.avatarURL)
          .setColor('RANDOM')
          .addField('**Servers**?? :', [client.guilds.size], true)
          .addField('**Users**?? :' ,`[ ${client.users.size} ]` , true)
          .addField('**Support**?? :' , `[سيرفر السبورت]` , true)
          .addField('**Developers**?? :' , `[<@الأيدي حقك>]` , true)
          .setFooter(message.author.username, message.author.avatarURL)
  })
}
});
