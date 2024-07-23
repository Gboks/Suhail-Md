const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349035733896";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_48_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNCxcbiAgICAgICAgMjEyLFxuICAgICAgICA1NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE4LFxuICAgICAgICA2MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDMzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODksXG4gICAgICAgIDQ2LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODMsXG4gICAgICAgIDg0LFxuICAgICAgICA4OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDMzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTYyLFxuICAgICAgICA5MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQwLFxuICAgICAgICA2NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIzLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDU1LFxuICAgICAgICA1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwLFxuICAgICAgICAxNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM2LFxuICAgICAgICA3MixcbiAgICAgICAgMTUsXG4gICAgICAgIDg3LFxuICAgICAgICA3NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTMzLFxuICAgICAgICAyNixcbiAgICAgICAgMTI4LFxuICAgICAgICA1OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY5LFxuICAgICAgICA2NixcbiAgICAgICAgMzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDczLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAxLFxuICAgICAgICA5MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDYzLFxuICAgICAgICA4MixcbiAgICAgICAgMTU0LFxuICAgICAgICA4NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDYyLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAzOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAzMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTUzLFxuICAgICAgICA1OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDExLFxuICAgICAgICAxMCxcbiAgICAgICAgMTAxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyOSxcbiAgICAgICAgODMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjM0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDYsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNixcbiAgICAgICAgMjI4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDUzLFxuICAgICAgICAyMyxcbiAgICAgICAgNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkovQnlFbjQ5cGZDMDMxdE5XZWJ1ODhRalUyaEtBY29TWjYrVmdKaHpnR289XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkpzc05lb05LUWpTZXNjeEFaWHh2cUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjIxZGU0OGUtODQyYy00M2Q4LWJjZWQtNWU3MjU0MmNlYTg0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ5LFxuICAgICAgMTkwLFxuICAgICAgMTg2LFxuICAgICAgMTYyLFxuICAgICAgMTQ2LFxuICAgICAgNTcsXG4gICAgICAxNjAsXG4gICAgICA3NyxcbiAgICAgIDIyOSxcbiAgICAgIDE3MCxcbiAgICAgIDIyMCxcbiAgICAgIDEzNyxcbiAgICAgIDQyLFxuICAgICAgMTc5LFxuICAgICAgMTg0LFxuICAgICAgMTYxLFxuICAgICAgMixcbiAgICAgIDEyMSxcbiAgICAgIDE3MCxcbiAgICAgIDQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMCxcbiAgICAgIDE0NCxcbiAgICAgIDIwNixcbiAgICAgIDcxLFxuICAgICAgMTksXG4gICAgICAxMjcsXG4gICAgICAxNTksXG4gICAgICAxNDUsXG4gICAgICAxNjUsXG4gICAgICAxNjcsXG4gICAgICAxNTAsXG4gICAgICAzMyxcbiAgICAgIDEyNSxcbiAgICAgIDIwNyxcbiAgICAgIDIxNSxcbiAgICAgIDExMixcbiAgICAgIDE4NixcbiAgICAgIDE3NixcbiAgICAgIDY1LFxuICAgICAgNjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNFJCWDRSN0VcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMzU3MzM4OTY6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkdib2tzXCIsXG4gICAgXCJsaWRcIjogXCIxMDM0ODMyNzc1OTA2MTY6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLYXMvLzBHRU5EYy9iUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkFkSk0xQyt2SUhLNXhCcUJxbkowckIzR2FRaHVwZTMvd2lvVTJuZEJpMnM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNVgvdW8vYTNPaXRxQ2lGUEljYmFTdjFMTjV1ZFVVMkhHODdUR2dCVHk1MHBjUFM4cE10YnVuVlJCL1N1SjRucm15N1NkOWtlVldXRDVrSDRDUzZiRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUnhqRDBPOGRIa3JZLy8rV0tzL2tCQ3FQNjQ0U3VKL3EyYnYySzQybEM5anh2ME1ZdkNqOGFHczhUWUNwZlJxUU03SFJtakVLTjFQSWdpa1hUMFhZakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAzNTczMzg5NjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNzI0NTAyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
