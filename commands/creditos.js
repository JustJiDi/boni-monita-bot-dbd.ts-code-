module.exports = [
	{
		type: "selectMenuCommand",
		code: `
$onlyIf[$interactionID==Menu;]
$onlyIf[$interactionValues==creditos;]
$updateInteraction
$thumbnail[1;$authorAvatar]
$title[1;categoria: creditos 📄]
$description[1;
$addField[1;owners;**$userTag[$botOwnerID], $userTag[788869971073040454]**]]
$color[1;FFAAAA]
$callFunction[Menu]
        `
	}
]