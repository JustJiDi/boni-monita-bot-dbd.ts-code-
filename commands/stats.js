module.exports = [
  {
    type: "basicCommand", 
    name: "stats", 
    aliases: ['bot', 'info'],
  code: ` 
  $thumbnail[1;$userAvatar[$clientID]]
  $title[1;info/estado del bot :]
  $description[1;$hyperlink[invitacion;$getBotInvite] - **no hay server de soporte por el momento.**

 CPU usado: **$djsEval[true;require('os').loadavg()[0\\]]%**
 - - - - - - - - - - - - - - - - -
 RAM gastada: **$truncate[$ram]**
 - - - - - - - - - - - - - - - - -
 PING: **$pingms**
 - - - - - - - - - - - - - - - - -
 UPTIME: **$httpGet[https://bonimonita.justjidimodel.repl.co;status;]**
 - - - - - - - - - - - - - - - - -
 CREADOR: **$userTag[$botOwnerID]**
 - - - - - - - - - - - - - - - - 
 CREADO EL: **09/18/21**
 - - - - - - - - - - - - - - - -
  LIBRERIA: **dbd.ts @v$packageVersion, discord.js @v$djsEval[true;require('discord.js').version], node @v17.2.0**]
  $addTimestamp[1]
  $color[1;FFAAAA]
  $footer[1;Boni'monita 0.0.3 (beta)] 
  `
  } 
] 