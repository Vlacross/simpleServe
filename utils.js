const request = require('request');

const emailCheck = val => (/^[A-Za-z\d\.\-]+@+[A-Za-z\d\.\-]+(\.)+[A-Za-z\d\.\-]+$/g.test(val) ? undefined : 'Incorrect email format!')

function alarm_clock(url) {
  let opts = {
    url: url,
    headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
  }
  request(opts);
}

module.exports = {
  emailCheck,
  alarm_clock
}

