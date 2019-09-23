const sgMail = require('@sendgrid/mail');

const { API_KEY, DESTINATION, SOURCE } = require('./config');

sgMail.setApiKey(API_KEY);

const email = {
  to: [DESTINATION],
  from: SOURCE,
  subject: '',
  text: ''
};

module.exports = {
  sgMail,
  email
}
