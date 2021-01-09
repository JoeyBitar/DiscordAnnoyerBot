const Discord = require("discord.js");
const client  = new Discord.Client();

const token = "NjkyOTA5NTg0NzU4ODY1OTMw.Xn1ZPQ.2b8m9DyBq6WIsmX9fqTV5iOZpOE";

client.on("ready",function(){
    console.log("Bot is online!");
})

client.on("message", function(msg){


    if(msg.author.username == "Heaven"){
      if(msg.content == "lol" || msg.content == "LOL" || msg.content == "Lol" || msg.content == "haha"){
        msg.reply("Was it actually funny Charbel?!?!");
      }
      else if(msg.content == "bruh"){
        msg.reply("Don't bruh me!");
      }
      else if(msg.content == "get on discord"){
        msg.reply("Nobody want's to join scrub");
      }
      else{
        msg.reply("Charbel shut the hell up!",{tts: true});
      }
    }
})


client.login(token);
