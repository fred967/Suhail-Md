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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256758069028";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_21_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDYxLFxuICAgICAgICA0NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI3LFxuICAgICAgICA5NixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA3NixcbiAgICAgICAgMTAsXG4gICAgICAgIDc4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE2LFxuICAgICAgICA2MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjM4LFxuICAgICAgICA2OCxcbiAgICAgICAgMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTksXG4gICAgICAgIDk4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExLFxuICAgICAgICAxNjgsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDYwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDc1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTY3LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDMsXG4gICAgICAgIDMxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTI4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTExLFxuICAgICAgICA5NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDgzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ0LFxuICAgICAgICA4NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI1LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTMwLFxuICAgICAgICA0MCxcbiAgICAgICAgODUsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1NixcbiAgICAgICAgMTIsXG4gICAgICAgIDg5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjAwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE2LFxuICAgICAgICA3MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDk1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDUyLFxuICAgICAgICA3OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDg4LFxuICAgICAgICA2NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODksXG4gICAgICAgIDI3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEsXG4gICAgICAgIDY0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTczLFxuICAgICAgICA4MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiK2d6cGYrZCtVUml5Ti83M0FmYkhXMEZoOTdyTjFiVExYamRpUW5EZlJBRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieVgxbFQ1Q2dRUjI4RFNBem1xQzdiZ1wiLFxuICBcInBob25lSWRcIjogXCIxYzhiYmQwMi1iN2MyLTQxNDUtYjIwNS04ZWQ4NmUyNmM5YTRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEyLFxuICAgICAgMTAsXG4gICAgICAxNixcbiAgICAgIDIwNyxcbiAgICAgIDIwNSxcbiAgICAgIDI2LFxuICAgICAgMTk0LFxuICAgICAgMjA2LFxuICAgICAgMyxcbiAgICAgIDEwLFxuICAgICAgMTU4LFxuICAgICAgMjM1LFxuICAgICAgMjQzLFxuICAgICAgMjQxLFxuICAgICAgMTA1LFxuICAgICAgMTk0LFxuICAgICAgMjUsXG4gICAgICAyMTgsXG4gICAgICA3OSxcbiAgICAgIDI0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODcsXG4gICAgICAzLFxuICAgICAgMjI1LFxuICAgICAgNzUsXG4gICAgICAyMTEsXG4gICAgICAyMzcsXG4gICAgICAxMixcbiAgICAgIDE2NixcbiAgICAgIDk4LFxuICAgICAgMTMsXG4gICAgICAxNDQsXG4gICAgICAyMDUsXG4gICAgICA1MixcbiAgICAgIDYsXG4gICAgICAxOTUsXG4gICAgICAxNDIsXG4gICAgICAxNjgsXG4gICAgICAxODIsXG4gICAgICAyMzYsXG4gICAgICAxMDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVjFFWFQyQ1lcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1Njc1ODA2OTAyODoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTI5ODIzODE4MjE5ODA6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJVEwzWU1GRU0vVThMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInlQbkQ0MmZsVGw0ZVBpM3NodThtWXZ5VkZEVldYL0ZISUNubysreTFJUjQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYjVxc1BEMm9ZbGFxR0FCTUlNSEQ4Q291VzBHRnFUdGxmL3pmTXUvbnh6RnpuTDlPaWFhU0FvaGtjTHpaOHZibjZ5Rk9hWWViYVdYUlNSM29LWGkyQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidkM1OFMzZ3d0N2ozdUJaQzQ3NmFlY1R6M2h5bmRwbjJXaDM4K3JBRVE4SG4ybE5QRkpGdFZ3Ym8yOTVBeUFwTys5T2JNQUQ0L1BXNmNLQ3VYZi9tREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2NzU4MDY5MDI4OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTUxMDQ4MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFUWFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQVRYLmpzb24iOiAie1wia2V5RGF0YVwiOlwiL25tSGhWQ3QxUVlDZTU1dFhpQlEzQWZNekJjb1Zvc2U2N2hJajJxa2xIOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzUwMDAyMDUyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE1MTA0ODc0NzBcIn0iCn0="  // PUT your SESSION_ID 


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
