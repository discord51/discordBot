const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "%";
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



const Util = require('discord.js'); //البكجات
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyDaBj_TsftdelDN2LADxonBFBmCYpAUXqI");
const queue = new Map();
const ytdl = require('ytdl-core');
 
 
 
client.on('message', async msg => {
    if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(prefix)) return undefined;
   
    const args = msg.content.split(' ');
    const searchString = args.slice(1).join(' ');
   
    const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
    const serverQueue = queue.get(msg.guild.id);
 
    let command = msg.content.toLowerCase().split(" ")[0];
    command = command.slice(prefix.length)
 
    if (command === `play`) {
        const voiceChannel = msg.member.voiceChannel;
       
        if (!voiceChannel) return msg.channel.send("I can't find you in any voice channel!");
       
        const permissions = voiceChannel.permissionsFor(msg.client.user);
       
        if (!permissions.has('CONNECT')) {
 
            return msg.channel.send("I don't have enough permissions to join your voice channel!");
        }
       
        if (!permissions.has('SPEAK')) {
 
            return msg.channel.send("I don't have enough permissions to speak in your voice channel!");
        }
 
        if (!permissions.has('EMBED_LINKS')) {
 
            return msg.channel.sendMessage("I don't have enough permissions to insert a URLs!")
        }
 
        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
 
            const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
           
 
            for (const video of Object.values(videos)) {
               
                const video2 = await youtube.getVideoByID(video.id);
                await handleVideo(video2, msg, voiceChannel, true);
            }
            return msg.channel.send(`**${playlist.title}**, Just added to the queue!`);
        } else {
 
            try {
 
                var video = await youtube.getVideo(url);
               
            } catch (error) {
                try {
 
                    var videos = await youtube.searchVideos(searchString, 5);
                    let index = 0;
                    const embed1 = new Discord.RichEmbed()
                    .setTitle(":mag_right:  YouTube Search Results :")
                    .setDescription(`
                    ${videos.map(video2 => `${++index}. **${video2.title}**`).join('\n')}`)
                   
                    .setColor("RANDOM")
                    msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
                                     


 client.on("message", message => {
	var prefix = "%";
 if (message.content === "%help-gn") {
	 message.channel.send('**تم ارسال رسالة في الخاص** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setDescription(`**
             
===================== Spider Member ===================== 
★ ・%id ➾ معلومات عن حسابك
================
★ ・%ping ➾ سرعة اتصالك بالانترنت
================
★ ・%avatar ➾ يظهر صورة بروفابلك
================
★ ・%server ➾ معلومات عن السيرفر
===============
★ ・%invites ➾ لمعرفة كام انفيت ليك بالسيرفر
================
★ ・%uptime ➾ لمعرفة كام وقت شغال البوت
================
★ ・%bot ➾ معلومات عن البوت
================
★ ・%اقتراحات ➾ لوضع اقتراح 
================
★ ・%حالات   ➾ يعطيك حلاتك
================
★ ・%Time ➾ لعرض الساعه و اليوم
          ================================
    ♥البوت مازال تحت التطوير اتمني ان يعجبكم ♥
===================== CMD Member ===================== 
**`)
   message.author.sendEmbed(embed)
    
   }
   }); 

   client.on("message", message => {
	var prefix = "%";
 if (message.content === "%help-ad") {
	 message.channel.send('**تم ارسال رسالة بالخاص** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setDescription(`**
             
==================== Spider Admin ===================== 
♕ ・%bc ➾ لارسال رساله لجميع الاعضاء
================
♕ ・%rolebc @rolename ➾ لارسال رسالة لاعضاء برتبهم المحددة
================
♕ ・%fastrandom ➾ لاختيار احد من الاعضاء عشوائي
================
♕ ・%ct ➾ لعمل روم كتابي
================
♕ ・%cv ➾ لعمل روم صوتي
================
♕ ・%setVoice ➾ لعمل روم يحسب من في الرومات الصوتية
================
♕ ・%setCount ➾ لعمل روم يحسب كل اعضاء السيرفر
================
♕ ・%nickname [@mention] [newname] ➾ لتغير اسم شخص معين 
================
♕ ・%ban [@mention] [reason] ➾  لحظر شخص من السيرفر
================
♕ ・%kick [@mention] [reason] ➾ لطرد شخص من السيرفر
================
♕ ・%mute [@mention] [reason] ➾ لاعطاء ميوت لعضو
================
♕ ・%unmute [@mention] ➾ لفك الميوت عن عضو
================
♕ ・%move [@mention] ➾ لنقل عضو لرومك الصوتي
================
♕ ・%move all ➾ لسحب جميع الاعضاء المتواجدين بالرومات الي رومك
================
♕ ・%mutechannel ➾ لاقفال الشات
================
♕ ・%unmutechannel ➾ لفتح الشات
================
♕ ・%clear ➾ لمسح الشات
================
♕ ・%role [@mention] [role name]  ➾ لاعطاء رتبة لعضو
================
♕ ・%roleremove [@mention] [role name] ➾ لسحب رتبة من عضو
================
**`)



client.on('message', message => {

  let totalDMs = client.channels.filter(function (s) {
          return true;
      }
      return false;
  })



client.on('message', message => {
    if (message.content.startsWith("^avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;

      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(${x5bzm.avatarURL})
      message.channel.sendEmbed(embed);
    }
});



console.log("Welcome Spider Shop !");

client.on('ready', () => {
    client.user.setStatus('idle');
});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**
      حياك الله ي بعد راسي
       خش بتنورنا فعاليات وكل شيء حلو موجود !
        ي بعد عيني الرابط تحت
         Spring SERVER

                                 [ https://discord.gg/afyQD8G ] **`)
}).catch(console.error)
})

client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**
      حياك الله ي بعد راسي
       خش بتنورنا فعاليات وكل شيء حلو موجود !
        ي بعد عيني الرابط تحت
         Spring SERVER

                                 [ https://discord.gg/afyQD8G ] **`)
}).catch(console.error)
})



client.on('message', message => {
    if (message.content.startsWith(prefix + 'ce')) {
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(ماعندك هذا البرمشن[*MANAGE_MESSAGES*]).catch(console.error);
  message.delete()
  if(!message.channel.guild) return;
  let args = message.content.split(" ").slice(1);

  const messagecount = parseInt(args.join(' '));

  message.channel.fetchMessages({

  limit: messagecount

  }).then(messages => message.channel.bulkDelete(messages));
  message.channel.sendMessage("", {embed: {
    title: "✏️✅ تــم مسح الشات",
    color: 0x06DF00,
    footer: {

    }
    }}).then(msg => {msg.delete(3000)});
  };

  });



client.on('message', message => {
    if (message.guild) return undefined;
    var roomid = "596149598267899928";
    var room = client.channels.get(roomid);
    if (!room) return undefined;
    var emb = new Discord.RichEmbed()
    .setColor("#36393e")
    .setAuthor(message.author.username,message.author.displayAvatarURL)
    .setDescription(`**Message from ${message.author} in the bot dm**\n\`\`\`apache\nMessage; ${message.content}\`\`\``)
    .setThumbnail(message.author.displayAvatarURL)
    .setTimestamp();
    room.send(emb);
});



client.on('message', function(msg) {
  if(msg.content.startsWith ('%voic')) {
                let foxembed = new Discord.RichEmbed()
                      .setColor('RANDOM') /// By Body
    .setDescription(`Voice Online : [ ${msg.guild.members.filter(m => m.voiceChannel).size} ]`)
    msg.channel.send(foxembed)
  }
});



client.on("guildMemberAdd", member => { if(!sWlc[member.guild.id]) sWlc[member.guild.id] = { channel: "chat" } const channel = sWlc[member.guild.id].channel const sChannel = sWlc[member.guild.id].channel let welcomer = member.guild.channels.find('name', sChannel); let memberavatar = member.user.avatarURL if (!welcomer) return; if(welcomer) { moment.locale('ar-ly'); var h = member.user; let heroo = new Discord.RichEmbed() .setColor('RANDOM') .setThumbnail(h.avatarURL) .setAuthor(h.username,h.avatarURL) .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true) .addField(': تاريخ دخولك السيرفر',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true) .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif") welcomer.send({embed:heroo}); var Canvas = require('canvas') var jimp = require('jimp') const w = ['w.png']; let Image = Canvas.Image, canvas = new Canvas(557, 241), ctx = canvas.getContext('2d'); fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) { if (err) return console.log(err) let BG = Canvas.Image; let ground = new Image; ground.src = Background; ctx.drawImage(ground, 0, 0, 540, 230); }) let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL; jimp.read(url, (err, ava) => { if (err) return console.log(err); ava.getBuffer(jimp.MIME_PNG, (err, buf) => { if (err) return console.log(err); ctx.font = '21px kathen'; ctx.fontSize = '25px'; ctx.fillStyle = "#FFFFFF"; ctx.fillText(member.user.username, 240, 150); //NAMEً ctx.font = '21px kathen'; ctx.fontSize = '20px'; ctx.fillStyle = "#FFFFFF"; ctx.fillText(`Welcome To ${member.guild.name}`, 240, 90); //AVATARً let Avatar = Canvas.Image; let ava = new Avatar; ava.src = buf; ctx.beginPath(); ctx.arc(120.8, 120.5, 112.3, 0, Math.PI*2, true); ctx.closePath(); ctx.clip(); ctx.drawImage(ava, 7, 8, 227, 225); ctx.closePath(); welcomer.sendFile(canvas.toBuffer()) }) })
});



client.on('message', message => {
    if (message.content.startsWith("-bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('bot info ')
            .addField('My Ping' , [${Date.now() - message.createdTimestamp} + 'MS'], true)
            .addField('RAM Usage', [${(process.memoryUsage().rss / 1048576).toFixed()}MB], true)
            .addField('servers', [client.guilds.size], true)
            .addField('channels' , [ ${client.channels.size} ] , true)
            .addField('Users' ,[ ${client.users.size} ] , true)
            .addField('My Name' , [ ${client.user.tag} ] , true)
            .addField('My ID' , [ ${client.user.id} ] , true)
                  .addField('My Prefix' , [ - ] , true)
                  .addField('My Language' , [ Java Script ] , true)
                  .setFooter('By | Elmusaui_GK and Speed')
    })
}
});



const Discord = require('discord.js'); 

const client = new Discord.Client();


client.on('ready', () => { 
console.log('I am ready!'); 
});


client.on('message', message => {
if (!message.guild) return;
if (message.content.startsWith('%kick')) {
const user = message.mentions.users.first();
if (user) {
const member = message.guild.member(user);
if (member) {
const member = message.guild.member(user);
if (member) {
member.kick('Optional reason that will display in the audit logs').then(() => {
message.reply(`Successfully kicked ${user.tag}`); }).catch(err => {
message.reply('انا لايمكنني طرد هذا الشخص كنتو غير مفعل');      ///  Spider Shop  حقوق سيرفر 
console.error(err); 
});
} else {
message.reply('هذا الشخص اعلا من رتبتي او ليس موجود');
console.error(err);
});
} else {
message.reply('يرجا منشن الشخص للطرد');

}
}
});
clicnt.login('NTk2MTUxMjM5MzIzMTU2NDgx.XR1XIA.OpL3OsyprfuBx8J2mvJnch48sBg')       ///  Spider Shop حقوق سيرفر



var prefix = %;
 
client.on('message',async message => {
  var room;
  var title;//HactorMC
  var duration;//HactorMC
  var gMembers;
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {
     //return message.channel.send('**في مشكله ببعض الاساسيات من فضلك انتظر شوي**');
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`**من فضلك اكب اسم الروم بدون منشن ( # )**`).then(msgg => {
      message.channel.awaitMessages(filter, {
        max: 1,//HactorMC
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name', collected.first().content);
        if(!room) return message.channel.send('**لم اقدر علي ايجاد الروم | اعد المحاوله لاحقا**');
        room = collected.first().content;
        collected.first().delete();
        msgg.edit('**اكتب مدة القيف اواي بالدقائق**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,//HactorMC
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **يجب عليك ان تحدد وقت زمني صحيح.. ``يجب عليك اعادة كتابة الامر``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msgg.edit(':eight_pointed_black_star:| **اكتب على ماذا تريد القيف اواي**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setAuthor(message.guild.name, message.guild.iconURL)
                  .setTitle(title)
                  .setDescription(`المدة : ${duration / 60000} دقائق`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;
                       let list = users.array().filter(u => u.id !== m.author.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                         if(users.size === 1) gFilter = '**لم يتم التحديد**';
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('انتهى القيف اواي !',`الفائز هو : ${gFilter}`)
                       .setFooter(message.guild.name, message.guild.iconURL);
                       m.edit(endEmbed);
                     },duration);
                   });
                  msgg.edit(`:heavy_check_mark:| **تم اعداد القيف اواي**`);
                } catch(e) {
                  msgg.edit(`:heavy_multiplication_x:| **لم اقدر علي اعداد القيف اواي بسبب عدم توفر البرمشن المطلوب**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});



client.on('message', async message => {
            if(message.content.includes('discord.gg')){ 
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(name, "اسكت");//اسم رتب ميوت
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "اسكت",//اسم رتب ميوت
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply(' This command only for servers');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(**  لقد تم اسكاتك ** , **Reason : تقاسم آخر خلاف الفتنة**)
            .setColor("c91616")
            .setThumbnail(${message.author.avatarURL})
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(${message.guild.name})
     message.channel.send(embed500)
     message.author.send('انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا من فضلك تكلم مع الادارة');//رسائل الى بعد ميوت فى خاص عضو


    }
})



client.on('message', message => {
    const badwords = ["احا", "معرص","كسمك","متناك","خول"]; // حدد الكلمات اللي تبي
    if( swearWords.some(word => message.content.includes(word)) ) {
        message.delete();
        message.author.send('لا تسب عشان لا تبلع ميوت يقلبي!'); // هنا تحط ايش يرد علي البوت
      }
})



client.on('message', message => {
    if(message.content == 'حالات') {
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setImage(message.guild.iconURL)
    .addField(`حالة الأعضاء🔋`,'-',   true)
.addField(`💚 اونلاين:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}`,'-',   true)
.addField(`❤ مشغول:     ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`,'-',   true)
.addField(`💛 خامل:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}`,'-',   true)   
.addField(`🖤 اوفلاين:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size}`,'-',  true) 
.addField(`💙   الكل:  ${message.guild.memberCount}`,'-',   true)         
         message.channel.send({embed});

    }
  });



lient.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
            
    
         


 message.author.sendMessage(`
`);

    }
});



client.on('message', message =>{
  if(message.content === '%ping'){
let start = Date.now(); message.channel.send('pong').then(message => { 
message.edit(`\`\`\`js
Time taken: ${Date.now() - start} ms
Discord API: ${client.ping.toFixed(0)} ms\`\`\``);
  });
  }
}); 



client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'رتبه')) {
        let guild = message.mentions.members.first();
                          let ZmA = new Discord.RichEmbed()
                  .setColor('3fcf24')
                  .setDescription('**__تـم عـطـاك__**')
        message.member.addRole(message.guild.roles.find('name', 'اسم الرتبه'));
                    message.channel.send({embed:ZmA});
    }
});



client.on("message", (message) => {
    if (message.content.startsWith("text")) {
                if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("ليس لديك `MANAGE_CHANNELS`");
            let args = message.content.split(" ").slice(1);
        message.guild.createChannel(args.join(' '), 'text');
    message.channel.sendMessage('تـم إنـشاء روم كـتابـي')
    
    }
    });



const weather = require('weather-js');
client.on('message', message => {
    let msg = message.content.toUpperCase(); 
    let cont = message.content.slice(prefix.length).split(" "); 
    let args = cont.slice(1); 
    if (msg.startsWith(prefix + 'طقس')) { 

        weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) {
            if (err) message.channel.send(err);

            
            if (result.length === 0) {
                message.channel.send('**يرجى إدخال موقع صالح.**').
                return; 
            }

           
            var current = result[0].current; 
            var location = result[0].location; 

           
            const embed = new Discord.RichEmbed()
.setDescription(`**${current.skytext}**`) 
                .setAuthor(`Weather for ${current.observationpoint}`) 
                .setThumbnail(current.imageUrl) 
                .setColor(0x00AE86) 
                .addField('وحدة زمنية',`UTC${location.timezone}`, true) 
                .addField('نوع الدرجة',location.degreetype, true)
                .addField('درجة الحرارة',`${current.temperature} Degrees`, true)
                .addField('أحس كأنني', `${current.feelslike} Degrees`, true)
                .addField('الرياح',current.winddisplay, true)
                .addField('رطوبة', `${current.humidity}%`, true)

                
                message.channel.send({embed});
        });
    }

});



 var prefix = "%";
client.on('message', message => {
         if (message.content === prefix + "Time") {
         if (!message.channel.guild) return message.reply('** This command only for servers **');  
         var currentTime = new Date(),
            hours = currentTime.getHours() + 4 ,
            hours2 = currentTime.getHours() + 3 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }  
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";
           
            }  
                         if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            }
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            var suffix = 'صباحاَ';
            if (hours >= 12) {
                suffix = 'مساء';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }
 
 
                var Date15= new Discord.RichEmbed()
                .setThumbnail("https://i.imgur.com/ib3n4Hq.png")
                .setTitle( "『التاريخ  والوقت』")
                .setColor('RANDOM')
                .setFooter(message.author.username, message.author.avatarURL)
                .addField('الامارات',
                "『"+ hours + ":" + minutes +":"+ seconds + "』")
                 .addField('مكه المكرمه',
                "『"+ hours2 + ":" + minutes +":"+ seconds  + "』")
                .addField('مصر',
                "『"+ hours3 + ":" + minutes +":"+ seconds  + "』")
               
                .addField('Date',
                "『"+ Day + "-" + Month + "-" + Year +  "』")
 
                 message.channel.sendEmbed(Date15);
        }
    });



client.on('message', message => {
 if (message.content.startsWith("ترحيب 3")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               }
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***مرحباً بك عدد ما خطته الأقلام من حروف وبعدد ما أزهر بالأرض زهور مرحباً ممزوجة بعطر الورد ورائحة البخور***')
  .setImage('https://www.askideas.com/media/13/Welcome-Signboard-Clipart.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});



client.on('message', async message => {
  if(message.content.startsWith(prefix + "اقتراح")) {
  await  message.channel.send(`اكتب اقتراحك الان`)
    let filter = m => m.author.id === message.author.id
      var text = '';
        let sugsa = message.channel.awaitMessages(filter, { max: 1, time: 60000})
          .then(co => {
            text = co.first().content

              message.channel.send(`تم حفظ اقتراحك الرجاء انتضار الرد من قبل الاداره`)
                client.channels.get("id room").send(`${message.author.username}'s sug => ${text}`)

              })
            }
          })



client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.get("596050488638570525");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        });
    });
});



client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.get("596050489091817493");
    if (!channel) {
        console.log("!the channel id it's not correct");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('-');
    var guild;
    while (!guild)
        guild = client.guilds.get("596050488638570525");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
 channel.send(`تم دعوته بواسطة  ${Invite.inviter} `) ;         
 }
            dat[Inv] = Invite.uses;
       
       });
    });
});



client.on('disconnect', () => console.log('I just disconnected, making sure you know, I will reconnect now...'));
 
client.on('reconnecting', () => console.log('I am reconnecting now!'));
 
client.on('message', async msg => { // eslint disable line
    if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(prefix)) return undefined;
    const args = msg.content.split(' ');
    const searchString = args.slice(1).join(' ');
    const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
    const serverQueue = queue.get(msg.guild.id);
 
    if (msg.content.startsWith(`${prefix}play`)) {
        console.log(`${msg.author.tag} has been used the ${prefix}play command in ${msg.guild.name}`);
 
        const voiceChannel = msg.member.voiceChannel;
        if (!voiceChannel) return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'I\'m sorry but you need to be in a voice channel to play music!'
              }
            ]
          }
        });
        const permissions = voiceChannel.permissionsFor(msg.client.user);
        if (!permissions.has('CONNECT')) {
            return msg.channel.send({embed: {
                color: 15158332,
                fields: [{
                    name: "❌ Error",
                    value: 'I cannot connect to your voice channel, make sure I have the proper permissions!'
                  }
                ]
              }
            });
        }
        if (!permissions.has('SPEAK')) {
            return msg.channel.send({embed: {
                color: 15158332,
                fields: [{
                    name: "❌ Error",
                    value: 'I cannot speak to your voice channel, make sure I have the proper permissions!'
                  }
                ]
              }
            });
        }
       
        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
            const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
            for (const video of Object.values(videos)) {
                const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
                await handleVideo(video2, msg, voiceChannel, true) // eslint-disable-line no-await-in-loop
            }
            return msg.channel.send({embed: {
                color: 15158332,
                fields: [{
                    name: "✅ Added playlist",
                    value: `Playlist: **${playlist.title}** has been added to the queue!`
                  }
                ]
              }
            });
        } else {
            try {
                var video = await youtube.getVideo(url);
            } catch (error) {
                try {
                    var videos = await youtube.searchVideos(searchString, 10);
                    let index = 0;
                    msg.channel.send({embed: {
                        color: 15158332,
                        fields: [{
                            name: "📋 Song selection",
                            value: `${videos.map(video2 => `\`${++index}\` **-** ${video2.title}`).join('\n')}`
                          },
                          {
                              name: "You have 10 seconds!",
                              value: "Provide a value to select on of the search results ranging from 1-10."
                          }
                        ]
                      }
                    }).then(message =>{message.delete(20000)})
                    // eslint-disable-next-line max-depth
                    try {
                        var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
                            maxMatches: 1,
                            time: 10000,
                            errors: ['time']
                        });
                    } catch (err) {
                        console.error(err);
                        return msg.channel.send({embed: {
                            color: 15158332,
                            fields: [{
                                name: "❌ Error",
                                value: 'No or invalid value entered, cancelling video selection...'
                              }
                            ]
                          }
                        }).then(message =>{message.delete(5000)})
                    }
                    const videoIndex = (response.first().content);
                    var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                } catch (err) {
                    console.error(err);
                    return msg.channel.send({embed: {
                        color: 15158332,
                        fields: [{
                            name: "❌ Error",
                            value: 'I could not obtain any search results.'
                          }
                        ]
                      }
                    }).then(message =>{message.delete(5000)})
                }
            }
 
            return handleVideo(video, msg, voiceChannel);
        }
    } else if (msg.content.startsWith(`${prefix}skip`)) {
        console.log(`${msg.author.tag} has been used the ${prefix}skip command in ${msg.guild.name}`);
        if (!msg.member.voiceChannel) return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'You are not in a voice channel!'
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        if (!serverQueue) return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'There is nothing playing that I could skip for you.'
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        serverQueue.connection.dispatcher.end();
        return undefined;
    } else if (msg.content.startsWith(`${prefix}stop`)) {
        console.log(`${msg.author.tag} has been used the ${prefix}stop command in ${msg.guild.name}`);
        if (!msg.member.voiceChannel) return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'You are not in a voice channel!'
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        if (!serverQueue) return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'There is nothing playing that I could stop for you.'
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end('Stop command has been used!');
        return undefined;
    } else if (msg.content.startsWith(`${prefix}volume`)) {
        console.log(`${msg.author.tag} has been used the ${prefix}volume command in ${msg.guild.name}`);
        if (!msg.member.voiceChannel) return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'You are not in a voice channel!'
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        if (!serverQueue) return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'There is nothing playing.'
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        if (!args[1]) return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "🔊 Volume",
                value: `The current volume is: **${serverQueue.volume}**`
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        serverQueue.volume = args[1];
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
        return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "🔊 Volume",
                value: `I set the volume to: **${args[1]}**`
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
    } else if (msg.content.startsWith(`${prefix}np`)) {
        console.log(`${msg.author.tag} has been used the ${prefix}np command in ${msg.guild.name}`);
        if (!serverQueue) return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'There is nothing playing that I could skip for you.'
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "🎵 Now playing",
                value: `**${serverQueue.songs[0].title}**`
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
    } else if (msg.content.startsWith(`${prefix}queue`)) {
        console.log(`${msg.author.tag} has been used the ${prefix}queue command in ${msg.guild.name}`);
        if (!serverQueue) return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'There is nothing playing that I could skip for you.'
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "📋 Song queue",
                value: `${serverQueue.songs.map(song => `**- ${song.title}**`).join('\n')}`
              },
              {
                  name: "🎵 Now playing",
                  value: `**${serverQueue.songs[0].title}**`
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        } else if(msg.content.startsWith(`${prefix}help`)) {
        console.log(`${msg.author.tag} has been used the ${prefix}help command in ${msg.guild.name}`);
 
        msg.channel.send('Please check your direct messages :inbox_tray:').then(message =>{message.delete(5000)})
 
        msg.react('✅');
 
        msg.author.send({embed: {
            color: 15158332,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            fields: [{
                name: "Bot's commands:",
                value: `**${prefix}help** - This message!\n\
**${prefix}play** - Play a song from YouTube.\n\
**${prefix}skip** - Skip a song.\n\
**${prefix}stop** - Stops the music.\n\
**${prefix}volume** - Change the volume of the bot.\n\
**${prefix}np** - The song that now playing.\n\
**${prefix}queue** - See the queue of songs.\n\
**${prefix}pause** - Pause the music.\n\
**${prefix}resume** - Resume the music.`
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "© Misaka"
            }
          }
        });
    } else if (msg.content.startsWith(`${prefix}pause`)) {
        console.log(`${msg.author.tag} has been used the ${prefix}pause command in ${msg.guild.name}`);
        if (serverQueue && serverQueue.playing) {
            serverQueue.playing = false;
        serverQueue.connection.dispatcher.pause();
        return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "⏯️ Pause",
                value: 'Paused the music for you!'
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        }
        return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'There is nothing playing.'
              }
            ]
          }
        }).then(message =>{message.delete(2000)})
    } else if (msg.content.startsWith(`${prefix}resume`)) {
        console.log(`${msg.author.tag} has been used the ${prefix}resume command in ${msg.guild.name}`);
 
        if (serverQueue && !serverQueue.playing) {
            serverQueue.playing =  true;
            serverQueue.connection.dispatcher.resume();
            return msg.channel.send({embed: {
                color: 15158332,
                fields: [{
                    name: "⏯️ Resume",
                    value: 'Resumed the music for you!'
                  }
                ]
              }
            }).then(message =>{message.delete(5000)})
        }
        return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'There is nothing playing or something is already playing.'
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
    }
 
    return undefined;
});
 
 
async function handleVideo(video, msg, voiceChannel, playlist = false) {
    const serverQueue = queue.get(msg.guild.id);
        const song = {
            id: video.id,
            title: Util.escapeMarkdown(video.title),
            url: `https://www.youtube.com/watch?v=${video.id}`
        };
        if (!serverQueue) {
            const queueConstruct = {
                textChannel: msg.channel,
                voiceChannel: voiceChannel,
                connection: null,
                songs: [],
                volume: 5,
                playing: true
            };
            queue.set(msg.guild.id, queueConstruct);
 
            queueConstruct.songs.push(song);
 
            try {
                var connection = await voiceChannel.join();
                queueConstruct.connection = connection;
                play(msg.guild, queueConstruct.songs[0]);
            } catch (error) {
                console.error(`I could not join the voice channel: ${error}`);
                queue.delete(msg.guild.id);
                return msg.channel.send({embed: {
                    color: 15158332,
                    fields: [{
                        name: "❌ Error",
                        value: `I could not join the voice channel: ${error}`
                      }
                    ]
                  }
                });
            }
        } else {
            serverQueue.songs.push(song);
            if (playlist) return undefined;
            else return msg.channel.send({embed: {
                color: 15158332,
                fields: [{
                    name: "✅ Added song",
                    value: `**${song.title}** has been added to the queue!`
                  }
                ]
              }
            }).then(message =>{message.delete(5000)})
        }
        return undefined;
}
 
function play(guild, song) {
    const serverQueue = queue.get(guild.id);
 
    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }
 
    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
        .on('end', () => {
            console.log('Song ended.');
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0]);
        })
        .on('error', error => console.log(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
 
    serverQueue.textChannel.send({embed: {
        color: 15158332,
        fields: [{
            name: "✅ Start playing",
            value: `Start playing: **${song.title}**`
          }
        ]
      }
    }).then(message =>{message.delete(5000)})
}


client.login(process.env.BOT_TOKEN);
