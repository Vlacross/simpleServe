require('dotenv').config();

module.exports = {
  API_KEY: process.env.SENDGRIP_API_KEY,
  DESTINATION: process.env.DESTINATION_ADDRESS,
  SOURCE: process.env.SOURCE_ADDRESS
}