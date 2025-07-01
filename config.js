

module.exports = {
  TOKEN: "",
  language: "pt",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "mongodb+srv://andre_andrezinh2:b5LFetVm1ADCooE7@cluster0.vksw71w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  spotifyClientId : "",
  spotifyClientSecret : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "Música", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "GlaceYT",
      password: "glaceyt",
      host: "eu-ro-01.wisp.uno",
      port:  9969,
      secure: false
    }
  ]
}
