const express = require('express');
const router = express.Router();
const { wakeCheck } = require('./middleware');
const { SITE_LIST } = require('./config');
const { alarm_clock } = require('./utils');

router
// .get('/test', (req, res) => {
//   console.log('mader');
//   res.json('Huh, I thought it might be you!')
// })
.post('/', wakeCheck, (req, res) => {
  let sites = SITE_LIST.split(' ');
  sites.forEach(site => alarm_clock(site));
  res.json({message: 'snooze'}).status(200)
})


module.exports = router;
