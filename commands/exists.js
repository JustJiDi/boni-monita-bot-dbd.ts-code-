module.exports = [
 {
  type: "basicCommand",
  name: "exists",
	 aliases: ["existe", "dbd"],
  code: ` $onlyForIDs[$botOwnerID;]
  **$httpGet[https://ruben.leref.repl.co/function/$message;description;]**
  `
 } 
]