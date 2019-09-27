const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const mailerRoutes = require('./mailer');
const  { CLIENT_ORIGIN, PORT } = require('./config');
const cors = require('cors');
const corsOpts = {
  origin: CLIENT_ORIGIN
}

app.use(cors(corsOpts));
app.use(jsonParser);
app.use('/mailer', mailerRoutes);



app.get('/', (req, res) => {
  console.log('simple get success')
  res.send("Thanks for waking me up...")
})

app.post('/merch-side-product', jsonParser, (req, res) => {
    let missingFields
    const requiredFields = ['uuid', 'subscription', 'custName', 'fiscalToken'];
    missingFields = requiredFields.filter(field => !req.body[field])
    if(missingFields.length > 0) {
        return res.json({
            type: 'error',
            code: 451,
            message: `Missing ${missingFields} in request headers, cannot process`
        })
    }
    return res.json({
      success: true,
      code: 200,
      message: 'merchant product transaction completed successfully'})
})








app.all('/*', (req, res) => {
res.send("Sorry, no end-point detected!")})

function selfServer() {

app.listen(PORT, () => {
  console.log(`App is listening on port ${ PORT }`)
})
}

(require.main === module) ? selfServer() : console.log('starting server')
