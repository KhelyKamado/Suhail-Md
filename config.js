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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_54_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDMzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNSxcbiAgICAgICAgODgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODQsXG4gICAgICAgIDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAzMixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODIsXG4gICAgICAgIDUxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjEzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTYwLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE2LFxuICAgICAgICA2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI5LFxuICAgICAgICA5NixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM5LFxuICAgICAgICA0OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODksXG4gICAgICAgIDI0MyxcbiAgICAgICAgOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDY4LFxuICAgICAgICA1NixcbiAgICAgICAgNjIsXG4gICAgICAgIDk3LFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMixcbiAgICAgICAgMjQ5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAzMixcbiAgICAgICAgMjEwLFxuICAgICAgICA5NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTY1LFxuICAgICAgICA3MyxcbiAgICAgICAgODgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDk2LFxuICAgICAgICAxODUsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTYsXG4gICAgICAgIDEwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTUsXG4gICAgICAgIDI0LFxuICAgICAgICAxODMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDcsXG4gICAgICAgIDc0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAzNixcbiAgICAgICAgNDEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDc2LFxuICAgICAgICA5NCxcbiAgICAgICAgMixcbiAgICAgICAgNjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODIsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjksXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjksXG4gICAgICAgIDExNixcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDc5LFxuICAgICAgICA5MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTI0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDExNixcbiAgICAgICAgNzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDYyLFxuICAgICAgICA2MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTAyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk2LFxuICAgICAgICA5MixcbiAgICAgICAgMTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNixcbiAgICAgICAgODcsXG4gICAgICAgIDgsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDcyLFxuICAgICAgICA2MixcbiAgICAgICAgMTcwLFxuICAgICAgICA4MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgODgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjksXG4gICAgICAgIDkzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRno3TG1PN2pISVZiTXp5dlJIdFN5Zm9YajJxYnQwLzd2ZUFCaDh4YVpqbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMWdNV2NqOVZUMy1iMk9LaXVyYUU3UVwiLFxuICBcInBob25lSWRcIjogXCI0YmMzNTI4ZC1mODc5LTQyOGQtOTIwMS00MDY3NDVhMGJkMzJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzQsXG4gICAgICAwLFxuICAgICAgMTA5LFxuICAgICAgMjUsXG4gICAgICAyMjEsXG4gICAgICAzOSxcbiAgICAgIDM2LFxuICAgICAgMTgsXG4gICAgICAyMDcsXG4gICAgICA1NCxcbiAgICAgIDEyMCxcbiAgICAgIDIyNSxcbiAgICAgIDI1LFxuICAgICAgMCxcbiAgICAgIDEyLFxuICAgICAgMTcxLFxuICAgICAgNzYsXG4gICAgICA0MyxcbiAgICAgIDE0MSxcbiAgICAgIDE0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODksXG4gICAgICAxNDIsXG4gICAgICA2OCxcbiAgICAgIDExOSxcbiAgICAgIDE4LFxuICAgICAgMjM5LFxuICAgICAgMjQwLFxuICAgICAgMjQ5LFxuICAgICAgMjI1LFxuICAgICAgMTUyLFxuICAgICAgMjEzLFxuICAgICAgOTksXG4gICAgICAxMzEsXG4gICAgICAyNTIsXG4gICAgICA3MCxcbiAgICAgIDE5NSxcbiAgICAgIDIyOSxcbiAgICAgIDc4LFxuICAgICAgNzAsXG4gICAgICAyMDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOTJORjRWSDhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI0MTA0Njg2OTg5OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzUxOTMxMjE4MjQ4OTY6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTzNac05rSEVOTFMvTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJqM2pvSmFaV05YbDNZMjdtZ003SDFKaEh1NGREczRKRjMvTU5la1huc2t3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkNDRlk3a29tSlBCRHczQTFBemUxVENzRTVudHRwUGVDbXFWZU1YcHBRLzd3MUdqVDVPa2tDZ3lrSmFvT3ZmYm80VTFLaGZ2S3NZbjU3cUVDbGx0TUF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjEwaElyZGxyeTlKRHBSdXA2WU13eHZzUUFoeHRjd0d5aEM2Sllod0R6NVFiT29mTzBRN1ZMRlluOEdQcGlIWHg1Sk5qY3RsZEtIWGs2UHdNVlE1cmpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI0MTA0Njg2OTg5OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE3MDY4MzcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDekZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUN6Ri5qc29uIjogIntcImtleURhdGFcIjpcInFYZURxQlFrV2JKN3Q5a0JnRkRYOG1ZZDdUNUEyd0F0S2VWbDBIdE9pQlU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA2NjQ5MjY1MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNzA2ODQyMTg3XCJ9Igp9"  // PUT your SESSION_ID 


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
