// Response for Uptime Robot
const http = require("http");
http
  .createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Discord bot is active now \n");
  })
  .listen(3000);

// Discord bot implements
const discord = require("discord.js");
const client = new discord.Client();
const bougen = ("死ね", "しね", "カス", "かす", "ごみ", "消えろ");
const config = require('config')


client.on("ready", message => {
  client.user.setPresence({
    game: {
      name: "Minecraft Hypixel"
    }
  });
  console.log("bot is ready!");
});

client.on("message", message => {
  if (message.isMemberMentioned(client.user)) {
    message.reply("しゃべりかけるなカス死ね！！");
    return;
  }
});

client.on("message", message => {
  if (message.content.includes(bougen)) {
    message.reply(
      "てめぇなに暴言はいてんだよ！次言ったらどうなるかわかってるよなぁ？"
    );
    return;
  }
});

client.on("message", message => {
  let channel = message.member.voice.channel;
  if(!channel){return;}
  if(message.content === '/join'){
    message.guild.me.join()
  }
 
});

client.on("message", message => {
  if (message.content === "inc") {
    const incvoice =
      "https://www.dropbox.com/s/dr8b9isqz1cdqwx/%E5%A5%B3%E6%80%A7%E3%81%8C%E6%AD%8C%E3%81%86%E6%9C%89%E5%BF%83%E8%AB%96RADWIMPS%28Covered%20by%20%E3%82%B3%E3%83%90%E3%82%BD%E3%83%AD%20%20Lefty%20Hand%20Cream%29%20%28mp3cut.net%29.mp3?dl=0";
    
  }
});

client.on('voiceStateUpdate', async (newState, oldState) =>
         {
  if (newState.channel === null)
    return;
  if (oldState.channel !== null && oldState.cheannel.id === newState.channel.id)
    return;
  await Promise.all(config.channel.map(channelData =>{
    return (async () => {
      if (newState.guild.id !== channelData.guild)
        return;
      if (newState.channel.id !== channelData.observechannel)
        return;
      if (newState.member.id !== channelData.observeuser)
        return;
      var channel = newState.guild.channels.resolve(channelData.channel);
      channel.send(channelData.message);
    });
  }));
});

if (process.env.DISCORD_BOT_TOKEN == undefined) {
  console.log("please set ENV: DISCORD_BOT_TOKEN");
  process.exit(0);
}

client.login(process.env.DISCORD_BOT_TOKEN);
