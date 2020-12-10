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


client.on("ready", message => {
  console.log("bot is ready!");
});

client.on("message", message => {
  if (message.content === "/join") {
    message.member.voice.channel.join();
    return;
  }
});

client.on("message", msg => {
  if (msg.content === "inc") {
    const dispatcher = msg.member.voice.channel.join().play('https://www.dropbox.com/s/dr8b9isqz1cdqwx/%E5%A5%B3%E6%80%A7%E3%81%8C%E6%AD%8C%E3%81%86%E6%9C%89%E5%BF%83%E8%AB%96RADWIMPS%28Covered%20by%20%E3%82%B3%E3%83%90%E3%82%BD%E3%83%AD%20%20Lefty%20Hand%20Cream%29%20%28mp3cut.net%29.mp3?dl=0');
    dispatcher;
  }
  return;
});

if (process.env.DISCORD_BOT_TOKEN == undefined) {
  console.log("please set ENV: DISCORD_BOT_TOKEN");
  process.exit(0);
}

client.login(process.env.DISCORD_BOT_TOKEN);
