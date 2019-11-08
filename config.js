require('dotenv').config();

module.exports = {
  API_KEY: process.env.SENDGRIP_API_KEY,
  DESTINATION: process.env.DESTINATION_ADDRESS,
  WAKE_WORDS: process.env.WAKE_WORDS,
  SITE_LIST: process.env.SITE_LIST,
  SOURCE: process.env.SOURCE_ADDRESS,
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN,
  PORT: process.env.PORT || 8080
}