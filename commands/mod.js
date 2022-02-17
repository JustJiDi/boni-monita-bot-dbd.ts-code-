module.exports = [
	{
		type: "selectMenuCommand",
		code: `
$onlyIf[$interactionID==Menu;]
$onlyIf[$interactionValues==modMenu;]
$updateInteraction
$thumbnail[1;$authorAvatar]
$title[1;categoria: moderacion 👮‍♂️]
$description[1;
$addField[1;b!kick;kickear/expulsar a un miembro.]
$addField[1;b!ban;banear a un usuario.]]
$color[1;FFAAAA]
$callFunction[Menu]
        `
	}
]