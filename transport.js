const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');

const { API_KEY, DESTINATION, SOURCE } = require('./config');

const options = {
  auth: {
    api_key: API_KEY
  }
};

const mailer = nodemailer.createTransport(sgTransport(options));

const email = {
  to: [DESTINATION],
  from: SOURCE,
  subject: '',
  text: '',
  html: ''
};

module.exports = {
  mailer,
  email
}
