module.exports = {
  type: "selectMenuCommand",
  code: `$onlyIf[$interactionID==Menu;]
$onlyIf[$interactionValues==home;]
$updateInteraction
$thumbnail[1;$authorAvatar]
$title[1;categoria: casa 🏡]
$description[1;test]
$color[1;FFAAAA]
  $callFunction[Menu]
  `
}