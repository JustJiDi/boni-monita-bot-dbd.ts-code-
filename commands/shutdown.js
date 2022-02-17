
module.exports = [
	{
		type: "basicCommand",
		name: "down",
		aliases: ["shutdown", "goodbye", "adios"],
		code: `
		$onlyForIDs[$botOwnerID;]
		$log[| - - - - - - - - - - - - - - - - - - - - - |
|	         now offline.                   |
| - - - - - - - - - - - - - - - - - - - - - |]
$shutdown
		`
	}
]