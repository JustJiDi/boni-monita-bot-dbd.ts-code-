module.exports = {
  type: "selectMenuCommand",
  code: `$onlyIf[$interactionID==Menu;]
$onlyIf[$interactionValues==general;]
$updateInteraction
$thumbnail[1;$authorAvatar]
$title[1;categoria: general 🏡]
$description[1;
$addField[1;b!stats;**estado del bot (ping etc)**]
$addField[1;b!jumbo;**obtener la imagen de algun emote para descargar**]]
$color[1;FFAAAA]
$callFunction[Menu]
  `
}