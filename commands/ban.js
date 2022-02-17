module.exports = {
  type: "basicCommand",
  name: "ban",
  code: `
  $onlyIf[$channelType[$channelID]!=DM;Este comando no puede ser ejecutado en dm, que  pensaste?]
  $onlyIf[$hasPerm[$guildID;$authorID;banmembers]!=false;<a:NOPELOTU:906037572252368977> | no tienes el permiso de **banmembers** para ejecutar esto.]
   $onlyIf[$mentioned[1]!=$authorID; <a:NOPELOTU:906037572252368977> | no puedes  **auto-banearte**.]
    $onlyIf[$mentioned[1]!=$clientID;<a:NOPELOTU:906037572252368977> | no puedes **banearme**. (porque lo harias?)]
    $onlyIf[$mentioned[1]!=;<a:NOPELOTU:906037572252368977> | porfavor **menciona** al desafortunado.]
		$suppressErrors[<a:NOPELOTU:906037572252368977>  | hubo un **conflicto**, posiblemente sea la jerarquia de mi rol o los permisos del mismo.]
   $title[1;DESAFORTUNADO BAN!]
   $if[$message[2]!=;$let[e;$messageSlice[2]];$let[e;no especificada]]
   $description[1; hubo un **ban** por parte de <@$authorID> hacia @$userTag[$mentioned[1]], por la razon: "**$get[e]**"]
   $color[1;FFAAAA]
   $addTimestamp[1;]
   $ban[$guildID;$mentioned[1;no];$get[e]]
   `
}