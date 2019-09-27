require('dotenv').config();

// const cors = require('cors');

// const corsOpts = {
//   origin: process.env.CLIENT_ORIGIN,
//   methods: 'POST'
// }

module.exports = {
  API_KEY: process.env.SENDGRIP_API_KEY,
  DESTINATION: process.env.DESTINATION_ADDRESS,
  SOURCE: process.env.SOURCE_ADDRESS
}