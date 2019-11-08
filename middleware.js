const { emailCheck } = require('./utils');
const { WAKE_WORDS } = require('./config');

const fieldCheck = (req, res, next) => {

  let missingFields;
  const requiredFields = ['returnAddr', 'name', 'subject', 'text'];
  missingFields = requiredFields.filter(field => !req.body[field]);
  if(missingFields.length > 0) {
    return res.json({
      type: 'error',
      code: 451,
      message: `Missing ${missingFields} in request headers, unable to process!`
    })
  } else if (emailCheck(req.body.returnAddr)) {
    return res.json({
      type: 'error',
      code: 451,
      message: `Improper email format, unable to process!`
    })
  } else {
    next(null, req.body);
  }
}

const wakeCheck = (req, res, next) => {

  if(!req.body.alarmkey) {
    return res.json({
      type: 'error',
      code: 401,
      message: 'Improper payload format.'
    })
  } else if (req.body.alarmkey != WAKE_WORDS) {
    return res.json({
      type: 'error',
      code: 401,
      message: 'Incorrect Key'
    })
  } else {
    next(null, req.body);
  }
}

module.exports = {
  fieldCheck,
  wakeCheck
}
