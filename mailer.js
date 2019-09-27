const express = require('express');
const router = express.Router();
const { fieldCheck } = require('./middleware');
const { sgMail, email } = require('./transport');

router
.get('/', (req, res) => {
  console.log('checkpointed in GET!')
  res.json('Oh, hello there..')
})

.post('/checkers', fieldCheck, (req, res) => {
  console.log('made it passed ed?')

  let emailObject = Object.assign({}, email, {
    subject: req.body.subject,
    text: `From: ${req.body.name}
           Email: ${req.body.returnAddr}
           Message:${req.body.text}`
  });

  return new Promise ((resolve, reject) => {
    sgMail.send(emailObject, function(err, response) {
      if(err) {
  
        console.log(err)
        return reject(err)
      }
      else {
        return resolve(response)
      }
  
    })
  })
  .then(response => {
    if(response.message === 'success') {
      console.log('success!')
     return res.json(response)
    }
    else {
      console.log(response)
      return res.json(response)
    }
  })
  .catch(err => {
    res.json({
      type: 'error',
      code: 451,
      message: 'There was an error sending Email!'
    })
    console.error(err)
  })
  
})






module.exports = router
