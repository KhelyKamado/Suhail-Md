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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_00_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDUzLFxuICAgICAgICA5MixcbiAgICAgICAgMTM3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDExMixcbiAgICAgICAgNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDg5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDcyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTY5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyLFxuICAgICAgICA1OSxcbiAgICAgICAgODgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDExOSxcbiAgICAgICAgODYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzksXG4gICAgICAgIDUzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjksXG4gICAgICAgIDI2LFxuICAgICAgICAyMzksXG4gICAgICAgIDgwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjE5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjEzLFxuICAgICAgICA3NixcbiAgICAgICAgMjUzLFxuICAgICAgICAxOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDcsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDU0LFxuICAgICAgICAzNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjksXG4gICAgICAgIDcyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAzNSxcbiAgICAgICAgODIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU5LFxuICAgICAgICA0MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwNixcbiAgICAgICAgNjIsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQxLFxuICBcImFkdlNlY3JldEtleVwiOiBcImhBa3FMVXQzTm5GNktXbHp0NExZeHhmYm1JVDNMdHhpdjByOEFVTk1XRGM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjBxTkJwcE1iUk0yMkhacGEwZDFsREFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTdhNDgwZTItNjc2Ny00YmM1LTk3NTktZDU2NTE0NzNjZjcyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MSxcbiAgICAgIDU3LFxuICAgICAgMTA0LFxuICAgICAgMTM2LFxuICAgICAgMjAyLFxuICAgICAgOCxcbiAgICAgIDY0LFxuICAgICAgMTgsXG4gICAgICA0OSxcbiAgICAgIDgyLFxuICAgICAgNzksXG4gICAgICA2NCxcbiAgICAgIDEyNSxcbiAgICAgIDUwLFxuICAgICAgMjUyLFxuICAgICAgMTk2LFxuICAgICAgMjE3LFxuICAgICAgODIsXG4gICAgICAxODIsXG4gICAgICA3OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTEsXG4gICAgICA1NCxcbiAgICAgIDE2MyxcbiAgICAgIDgxLFxuICAgICAgMTU1LFxuICAgICAgMjQ1LFxuICAgICAgNTgsXG4gICAgICA1NCxcbiAgICAgIDE5OCxcbiAgICAgIDE4LFxuICAgICAgNzgsXG4gICAgICAxMzksXG4gICAgICAxNzIsXG4gICAgICAyMjQsXG4gICAgICAzNixcbiAgICAgIDIxNixcbiAgICAgIDIwMixcbiAgICAgIDE4MyxcbiAgICAgIDU3LFxuICAgICAgNjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWlI4TFZMN0NcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI0MTA0Njg2OTg5OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzUxOTMxMjE4MjQ4OTY6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3Jac05rSEVJL3oxTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJqM2pvSmFaV05YbDNZMjdtZ003SDFKaEh1NGREczRKRjMvTU5la1huc2t3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNjLzBiWlRKRXBSYkxweXdVbzJlME0zTVo4eTJHOUlCRUtZR3FJOWlyQld6ckw3OEh3czh6dnVRMFhGYXh0dHBvd0Faajl5MG5ycTdvMlBhenV2WEFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInNBc1pMT1dvS0MvWEJjajJXU05idk9STkVzMFB4V1JRcnBXNlBXRS9vRWlXSnJ3SjRzQ0RnZGdyMWQ2eVNjOVFabEpFdjI1QlBjZGdPdlU0Z1h3YWh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI0MTA0Njg2OTg5OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEwNTU2MzUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJMHRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUkwdC5qc29uIjogIntcImtleURhdGFcIjpcImZVSG11bjUrZFMvcHgvMzVsd3gvTGhCWG9tT3JrdTBNQUZ4UXdvRW9kZXM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA2NjQ5MjY0OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
