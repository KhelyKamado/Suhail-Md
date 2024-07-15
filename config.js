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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_35_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExMixcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE5LFxuICAgICAgICA0LFxuICAgICAgICA3MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA0LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzksXG4gICAgICAgIDQ5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTExLFxuICAgICAgICA0OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjIwLFxuICAgICAgICA4MixcbiAgICAgICAgNjMsXG4gICAgICAgIDc2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDksXG4gICAgICAgIDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAzOSxcbiAgICAgICAgODMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDc1LFxuICAgICAgICAwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODEsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4LFxuICAgICAgICA4NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA3LFxuICAgICAgICA2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDksXG4gICAgICAgIDEzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzksXG4gICAgICAgIDk5LFxuICAgICAgICAyMDksXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjEyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0NixcbiAgICAgICAgNzcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDc5LFxuICAgICAgICA2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjUxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTI5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTI1LFxuICAgICAgICA3OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDYwLFxuICAgICAgICAxOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDYwLFxuICAgICAgICAxNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ1T3BrclpMclM1b3JJSjRZSVpzczloU1FaTVBDZld3LzA5VHE1Q3NrckJFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI0MTA0Njg2OTg5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3RTlGMTRCMzAzMTlEOTQzNEExRjNDNEVFQTJCNDIwNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEwNTQxNDFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNDEwNDY4Njk4OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDAzQjMwQzk1ODUyQkJBRUQ5REQ2MDkyQjkzRjQ0MjlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMDU0MTQxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkVucHRoamNDU0VTSTlCOHZOVGEwNWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzBmYjkyYmEtY2U5Zi00MmM5LWI3YTAtMmQyOTE4YzdlMWY3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MSxcbiAgICAgIDY3LFxuICAgICAgNjYsXG4gICAgICA1OCxcbiAgICAgIDk0LFxuICAgICAgMTI1LFxuICAgICAgMjQwLFxuICAgICAgMTAwLFxuICAgICAgNDIsXG4gICAgICAxODIsXG4gICAgICAyMDAsXG4gICAgICAxLFxuICAgICAgMzgsXG4gICAgICAyMDAsXG4gICAgICAxMTYsXG4gICAgICA3MCxcbiAgICAgIDQ1LFxuICAgICAgMjE3LFxuICAgICAgMTE4LFxuICAgICAgMTIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQsXG4gICAgICAxODcsXG4gICAgICAxODksXG4gICAgICAxODMsXG4gICAgICAyMDYsXG4gICAgICA4MCxcbiAgICAgIDEyMyxcbiAgICAgIDE5NixcbiAgICAgIDQ5LFxuICAgICAgMTMsXG4gICAgICAxNTQsXG4gICAgICAxNCxcbiAgICAgIDI0NCxcbiAgICAgIDE1MyxcbiAgICAgIDIwNyxcbiAgICAgIDk2LFxuICAgICAgODIsXG4gICAgICAzOCxcbiAgICAgIDE4MSxcbiAgICAgIDExMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2WlFZUTlUSlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjQxMDQ2ODY5ODk6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzNTE5MzEyMTgyNDg5NjoxMEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwn4yfS2nDv8O4dMSBa2Egw4V5YW7FjWvDuGrDruKdpO+4j1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09uWnNOa0hFTEhuMUxRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiajNqb0phWldOWGwzWTI3bWdNN0gxSmhIdTRkRHM0SkYzL01OZWtYbnNrdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDNmVxKzFybURRdngzR2hyVHNjakE2Uk1ub0JyNDd5ZmxyYWlla3BYNDFibGtzY0NTRFBxRTJ3Z0R1NEtKK2JsZW0rRUh2ZjU0TlVJQllqVVRwUUlBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJsdENtUmlXYnAyMjY0d2h1UmcrQ2xtMGt6VU45ZXQ5Z1ZnWjNnZlhYMU1KRlhSMmFKaDZGdU5mcUxiVGl1NWlQZk5FZG1qNm8ycFlsTTNCeHlVNWVEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNDEwNDY4Njk4OToxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMDU0MTM0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSTB0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJMHQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJmVUhtdW41K2RTL3B4LzM1bHd4L0xoQlhvbU9ya3UwTUFGeFF3b0VvZGVzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNjY0OTI2NDksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTA1NDEzNjQzOVwifSIKfQ=="  // PUT your SESSION_ID 


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
