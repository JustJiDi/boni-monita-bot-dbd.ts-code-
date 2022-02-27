module.exports = {
  type: "basicCommand",
  name: `commands`,
  aliases: ['comandos'],
  code: `
$onlyIf[$channelType[$channelID]!=DM;Este comando no puede ser ejecutado en dm]
  se le a enviado un DM/MD, señor(a): <@$authorID> <a:si:906037146350129182>
	$sendDM[$authorID;$thumbnail[1;$authorAvatar]
	$title[1;categoria: casa 🏡]
	$description[1;test]
	$color[1;FFAAAA]
  $callFunction[Menu;false]]
  `
}