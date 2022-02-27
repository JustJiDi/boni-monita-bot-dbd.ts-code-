module.exports = (client) => {
  client.createCustomFunction({
 name: "Menu",
 code:  `
 $ignoreCode[copia esto y modificalo awebonado, recuerda que el penultimo es la ID de la interacion.]
 
 $addActionRow
 $addSelectMenu[Menu;selecciona una categoria 🤖;0;0]
 $addSelectMenuOption[general;categoria: general 🏡;general;🏡]
 $addSelectMenuOption[mod;categoria: moderacion 👮‍♂️;modMenu;👮‍♂️]
$addSelectMenuOption[credits;categoria: creditos 📄;creditos;📄]
 $color[1;FFAAAA]
 `
	}
	)
}