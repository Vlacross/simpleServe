const { emailCheck } = require('./utils');

const fieldCheck = (req, res, next) => {
  console.log('fieldCheck start')

  let missingFields;
  console.log(req.body)
  const requiredFields = ['from', 'to', 'subject', 'text', 'html'];
  missingFields = requiredFields.filter(field => !req.body[field]);
  if(missingFields.length > 0) {
    return res.json({
      type: 'error',
      code: 451,
      message: `Missing ${missingFields} in request headers, unable to process!`
    })
  } else if (emailCheck(req.body.from)) {
    return res.json({
      type: 'error',
      code: 451,
      message: `Improper email format, unable to process!`
    })
  } else {
    next(null, req.body);
  }
}

module.exports = {
  fieldCheck
}
