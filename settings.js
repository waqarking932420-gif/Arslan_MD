const fs = require('fs');
const path = require('path');
const settings = require('./settingss');

// 🔧 CONFIGURATION INITIALIZATION
// ============================================
// Load environment variables from config.env if exists
if (fs.existsSync(path.resolve('config.env'))) {
  require('dotenv').config({ path: path.resolve('config.env') });
}

// 📦 HELPER FUNCTION
// ============================================
// Convert string values to boolean
function convertToBool(text, trueValue = 'true') {
  return text === trueValue;
}

// 🔑 API KEY MANAGEMENT
// ============================================
// Global API key configuration with fallback support
// Primary: settings.js → Secondary: process.env → Fallback: Default
global.btc = settings.btc || process.env.BTC_API_KEY || 'Apikey_Lu_Mas';
global.betabotz = settings.betabotz || process.env.BETABOTZ_API_KEY || 'Apikey_Lu_Mas';
global.geminiai = settings.geminiai || process.env.GEMINIAI_API_KEY || 'Apikey_Lu_Mas';
global.geminimaker = settings.geminimaker || process.env.GEMINIMAKER_API_KEY || 'Apikey_Lu_Mas';
global.lolkey = settings.lolkey || process.env.LOLHUMAN_API_KEY || 'Apikey_Lu_Mas';
global.fgsiapi = settings.fgsiapi || process.env.FGSI_API_KEY || 'Apikey_Lu_Mas';

// ⚠️ CRITICAL SECTION - DO NOT MODIFY
// ============================================
// API endpoint configuration
global.APIs = {
  btc: 'https://api.botcahx.eu.org'
}

global.APIKeys = {
  'https://api.botcahx.eu.org': global.btc
}

// 🤖 BOT CONFIGURATION EXPORT
// ============================================
// Developer: ArslanMD Official
// Bot Name: Arslan-MD
// Repository: https://github.com/Arslan-MD/Arslan_MD
// Version: 5.0.0

module.exports = {
  // ========================
  // 🤖 BOT CORE SETTINGS
  // ========================
  SESSION_ID: settings.SESSION_ID || process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUJ3bFdqMS9hVEQvOWp3T1JxcXUvWDZFOUJmR1h1WElTdmxUcDhxRU4wbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTlpPSHN6YlV3R05wZjcvRTdiT1p6NlhGZVY3cEZjeEgvdUVpRzVUTi9YND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrRWxQb1l0Q2Z2T2xZRVhrM2VTbFhLd2RMSitkeERldit3elkzWmVWdzEwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmMHJuTGxGNjltVC9CS05oS09oUXZxRnc3RmtuV21UQkJVdDEwak5oenowPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitEREsxWElGRTE3Nk5INDVDOXNBT0pRRVdId2hBNk04cjNNR0ZFdDA1Vmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikwyb0tqTTJIK1RuMHpqU0dqTGNPelY2R3NJVlFCejZ2RGxmUWxiMnlVU3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1BsUnBuWmxYUDNOWWZpdzFVQmQ3Z1F5ajUzOUlVZjVhVWdJMFRuU1pHRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYTlkZ0F2OW9ZNU91TmF6bm9hVXFtU3pzUXhjdXJtZ0ltMWl2TjBVN3lDND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhhT0ZOT1ZsL0RoMUQwcVFGT2dDS1crZG1mNmwzYTBxczhuUDZFclJFdWpDWUs3UWJ4K1luZzBQUHpiblMzYzBmTVh0eEJJNWdTU2dhdGJhSlVUZURBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTEsImFkdlNlY3JldEtleSI6IlJBWk91OVUzUTFQcnF0Ymg4NStMWTNsTUlMUkc0U09HSlhkb2I0Q09tbTg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjRDUlpfT0JHU3ZlZFZrSlRBdENCb0EiLCJwaG9uZUlkIjoiMjE1YjQzYjEtOTdkMi00Mjc3LTkzZTMtYWQyYzA4ZDc4MzE0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlWKzRmQ0xBMy9LMnpUbHRvU1hVNFkwVU1tOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmZGVkSHd3aVpVamlBNVBsTU5uNUdPYWtVeWM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTFNMS0I1UFAiLCJtZSI6eyJpZCI6IjkyMzQ5NTE3ODY2Mzo0QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTAyNDY5ODY2NjcyMzU1OjRAbGlkIiwibmFtZSI6IldhUWFyIExpTExhIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJYXYwcXdFRUxtNDVjb0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJmRHBmTy9SbTlVcml0aTBuMjEvUTc5SFFsdWNmZzV0QUlnVzFrcEV3TlFRPSIsImFjY291bnRTaWduYXR1cmUiOiIySHlPWWdPWW5jWmk4V0JHMFRZd0tQRmRqbzhGRHhuQkhaN0t2TEV6ZlZNK1AxTVlObmh1c3N0SC9uSlgrNC9OWVhSS3NiWlRnZHMwcWp6WUlxV3dBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZWtEWDlJQys5RDE5MWdrUDJYMFpkTFA0ZjY3OFRaaVZVTXZUa2NrSjh2OFZONnBpdStBUzZVNzhTV01EbS8wMEVGaXBIOGZBaXMvNGUyV0ZkU05TREE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM0OTUxNzg2NjM6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYdzZYenYwWnZWSzRyWXRKOXRmME8vUjBKYm5INE9iUUNJRnRaS1JNRFVFIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQWdnSSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Njc0NjQwMDcsImxhc3RQcm9wSGFzaCI6IjFLNGhINCJ9",
  PREFIX: settings.PREFIX || process.env.PREFIX || ".",
  CHATBOT: settings.CHATBOT || process.env.CHATBOT || "off",
  BOT_NAME: settings.BOT_NAME || process.env.BOT_NAME || "ᴀʀꜱʟᴀɴ-ᴍᴅ",
  MODE: settings.MODE || process.env.MODE || "private",
  REPO: process.env.REPO || "https://github.com/Arslan-MD/Arslan_MD",
  PAIRING_CODE: process.env.PAIRING_CODE || 'true',
  BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",

  // ========================
  // 👑 OWNER & DEVELOPER
  // ========================
  OWNER_NUMBER: settings.OWNER_NUMBER || process.env.OWNER_NUMBER || "923237045919",
  OWNER_NAME: settings.OWNER_NAME || process.env.OWNER_NAME || "ᴀʀꜱʟᴀɴ-ᴍᴅ",
  DEV_NAME: process.env.DEV_NAME || "ᴀʀꜱʟᴀɴ-ᴍᴅ",
  DEV: process.env.DEV || "923237045919",
  DEVELOPER_NUMBER: '923237045919@s.whatsapp.net',

  // ========================
  // 🔐 API KEY INTEGRATION
  // ========================
  BTC_API_KEY: global.btc,
  BETABOTZ_API_KEY: global.betabotz,
  GEMINIAI_API_KEY: global.geminiai,
  GEMINIMAKER_API_KEY: global.geminimaker,
  LOLHUMAN_API_KEY: global.lolkey,
  FGSI_API_KEY: global.fgsiapi,
  
  // ========================
  // 🎵 MEDIA & AUDIO
  // ========================
  MENU_AUDIO_URL: settings.MENU_AUDIO_URL || process.env.MENU_AUDIO_URL || 'https://files.catbox.moe/xkvhbi.mp3',
  AUDIO_URL: settings.AUDIO_URL || process.env.AUDIO_URL || 'https://files.catbox.moe/j88eur.mp3',
  AUDIO_URL2: settings.AUDIO_URL2 || process.env.AUDIO_URL2 || 'https://files.catbox.moe/wlt7ge.mp3',

  // ========================
  // 📧 NEWSLETTER SETTINGS
  // ========================
  NEWSLETTER_JID: process.env.NEWSLETTER_JID || '120363348739987203@newsletter',
  N_NAME: process.env.N_NAME || "❀༒★[ᴀʀꜱʟᴀɴ-ᴍᴅ]★༒❀",

  // ========================
  // ⚡ AUTO-RESPONSE SYSTEM
  // ========================
  AUTO_REPLY: settings.AUTO_REPLY || process.env.AUTO_REPLY || "false",
  AUTO_STATUS_REPLY: settings.AUTO_STATUS_REPLY || process.env.AUTO_STATUS_REPLY || "false",
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "Just seen ur status 😆 🤖",
  READ_MESSAGE: settings.READ_MESSAGE || process.env.READ_MESSAGE || "false",
  REJECT_MSG: process.env.REJECT_MSG || "📵 Calls are not allowed on this number unless you have permission. 🚫",
  ALIVE_IMG: settings.ALIVE_IMG || process.env.ALIVE_IMG || "https://files.catbox.moe/16i1l7.jpg",
  LIVE_MSG: process.env.LIVE_MSG || "> ʙᴏᴛ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦ᴀʀꜱʟᴀɴ-ᴍᴅ✦ ғʀᴏᴍ ᴀʀꜱʟᴀɴ ᴛᴇᴄʜ ɪɴᴄ⚡\n\n\n© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ\n\n> ɢɪᴛʜᴜʙ : github.com/Arslan-MD/Arslan_MD",

  // ========================
  // ✨ REACTION & STICKER
  // ========================
  AUTO_REACT: settings.AUTO_REACT || process.env.AUTO_REACT || "false",
  OWNER_REACT: settings.OWNER_REACT || process.env.OWNER_REACT || "false",
  CUSTOM_REACT: settings.CUSTOM_REACT || process.env.CUSTOM_REACT || "false",
  CUSTOM_REACT_EMOJIS: settings.CUSTOM_REACT_EMOJIS || process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
  STICKER_NAME: process.env.STICKER_NAME || "ᴀʀꜱʟᴀɴ-ᴍᴅ",
  AUTO_STICKER: settings.AUTO_STICKER || process.env.AUTO_STICKER || "false",

  // ========================
  // 🎭 MEDIA AUTOMATION
  // ========================
  AUTO_RECORDING: settings.AUTO_RECORDING || process.env.AUTO_RECORDING || "false",
  AUTO_TYPING: settings.AUTO_TYPING || process.env.AUTO_TYPING || "false",
  MENTION_REPLY: settings.MENTION_REPLY || process.env.MENTION_REPLY || "false",
  MENU_IMAGE_URL: settings.MENU_IMAGE_URL || process.env.MENU_IMAGE_URL || "https://files.catbox.moe/16i1l7.jpg",

  // ========================
  // 🛡️ SECURITY & PROTECTION
  // ========================
  ANTI_DELETE: settings.ANTI_DELETE || process.env.ANTI_DELETE || "true",
  ANTI_CALL: settings.ANTI_CALL || process.env.ANTI_CALL || "false",
  ANTI_BAD_WORD: settings.ANTI_BAD_WORD || process.env.ANTI_BAD_WORD || "false",
  ANTI_LINK: settings.ANTI_LINK || process.env.ANTI_LINK || "true",
  ANTI_SPAM: settings.ANTI_SPAM || process.env.ANTI_SPAM || "true",
  ANTI_VV: settings.ANTI_VV || process.env.ANTI_VV || "true",
  DELETE_LINKS: settings.DELETE_LINKS || process.env.DELETE_LINKS || "false",
  ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
  ANTI_BOT: settings.ANTI_BOT || process.env.ANTI_BOT || "true",
  PM_BLOCKER: settings.PM_BLOCKER || process.env.PM_BLOCKER || "true",

  // ========================
  // 💫 BOT BEHAVIOR & APPEARANCE
  // ========================
  DESCRIPTION: process.env.DESCRIPTION || "© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʀꜱʟᴀɴ-ᴍᴅ",
  PUBLIC_MODE: settings.PUBLIC_MODE || process.env.PUBLIC_MODE || "true",
  ALWAYS_ONLINE: settings.ALWAYS_ONLINE || process.env.ALWAYS_ONLINE || "false",
  AUTO_STATUS_REACT: settings.AUTO_STATUS_REACT || process.env.AUTO_STATUS_REACT || "true",
  AUTO_STATUS_SEEN: settings.AUTO_STATUS_SEEN || process.env.AUTO_STATUS_SEEN || "true",
  AUTO_BIO: settings.AUTO_BIO || process.env.AUTO_BIO || "false",
  WELCOME: settings.WELCOME || process.env.WELCOME || "false",
  GOODBYE: settings.GOODBYE || process.env.GOODBYE || "false",
  ADMIN_ACTION: settings.ADMIN_ACTION || process.env.ADMIN_ACTION || "false",
  version: process.env.version || "2.0.1",
  TIMEZONE: settings.TIMEZONE || process.env.TIMEZONE || "Asia/Karachi",

  // ========================
  // 📊 LOGGING & DEBUGGING
  // ========================
  LOGGING_ENABLED: process.env.LOGGING_ENABLED || "false",

  // ========================
  // ⏳ SYSTEM VARIABLES
  // ========================
  wait: "Please wait...",
  BOTCAHX_API_KEY: global.btc,

  // ========================
  // 🖼️ THUMBNAIL & ASSETS
  // ========================
  thumbnailutama: "https://files.catbox.moe/16i1l7.jpg",

  // ========================
  // 🔗 SOCIAL LINKS
  // ========================
  instagramowner: "https://instagram.com/arslanmdofficial",
  
  // ========================
  // 📸 MENU CATEGORY IMAGES
  // ========================
  MENU_IMAGES: {
    '1': process.env.DOWNLOAD_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg",
    '2': process.env.GROUP_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg",
    '3': process.env.FUN_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg",
    '4': process.env.OWNER_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg",
    '5': process.env.AI_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg",
    '6': process.env.ANIME_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg",
    '7': process.env.CONVERT_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg",
    '8': process.env.OTHER_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg",
    '9': process.env.REACTION_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg",
    '10': process.env.MAIN_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg",
    '11': process.env.LOGO_MAKER_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg",
    '12': process.env.SETTINGS_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg",
    '13': process.env.AUDIO_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg",
    '14': process.env.PRIVACY_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg"
  }
};
