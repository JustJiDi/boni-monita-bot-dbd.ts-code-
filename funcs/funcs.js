module.exports = (client) => {
  client.createCustomFunction({
 name: "Menu",
 code:  `
 $ignoreCode[copia esto y modificalo awebonado, recuerda que el penultimo es la ID de la interacion.]
 
 $addActionRow
 $addSelectMenu[Menu;selecciona una categoria 🤖;0;0]
 $addSelectMenuOption[casa;categoria: casa 🏡;home;🏡]
 $addSelectMenuOption[mod;categoria: moderacion 👮‍♂️;modMenu;👮‍♂️]
 $color[1;FFAAAA]
 `
	}
	)
}