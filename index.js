const Discord = require("discord.js");
const client  = new Discord.Client();

const token = "Your token";

client.on("ready",function(){
    console.log("Bot is online!");
})

client.on("message", function(msg){


    if(msg.author.username == "Name of the person"){
      if(msg.content == "lol" || msg.content == "LOL" || msg.content == "Lol" || msg.content == "haha"){
        msg.reply("Input message here");
      }
      else if(msg.content == "Message"){
        msg.reply("Message");
      }
      else if(msg.content == "Message"){
        msg.reply("Message");
      }
      else{
        msg.reply("Message",{tts: true});
      }
    }
})


client.login(token);
