module.exports = {
  type: "basicCommand",
  name: "kick",
  code: `
  $onlyIf[$channelType[$channelID]!=DM;Este comando no puede ser ejecutado en dm]
   $onlyIf[$mentioned[1]!=$authorID;<a:error:891842577228247070> | no puedes   **auto-kickearte**.]
    $onlyIf[$mentioned[1]!=$clientID;<a:error:891842577228247070> | no puedes **kickearme**. (porque lo harias?)]
    $onlyIf[$mentioned[1]!=;<a:error:891842577228247070> | porfavor **menciona** al desafortunado.]
    $onlyIf[$hasPerm[$guildID;$authorID;kickmembers]!=false;<a:error:891842577228247070> | no tienes el permiso de **kick members** para ejecutar esto.]
   $title[1;DESAFORTUNADO KICK!]
   $if[$message[1]!=;$let[r;$messageSlice[1]];$let[r;no  especificada]]
   $description[1; hubo un **kick** por parte de <@$authorID> hacia @$userTag[$mentioned[1]], por la razon: "$get[r]"]
   $color[1;FFAAAA]
   $addTimestamp[1;]
   $kick[$guildID;$mentioned[1];$get[r]]
   `
}