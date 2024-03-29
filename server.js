const express = require('express');
const subdomain = require('express-subdomain');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const mailerRoutes = require('./mailer');
const wakeUpRoutes = require('./wakeUp');
const  { CLIENT_ORIGIN, PORT } = require('./config');
const cors = require('cors');
const corsOpts = {
  origin: CLIENT_ORIGIN
}

app.use(cors(corsOpts));
app.use(jsonParser);
app.use('/mailer', mailerRoutes);
app.use('/wake-up', wakeUpRoutes);
app.use(subdomain('staging.veeloapp', app));


app.get('/', (req, res) => {
  console.log('simple get success')
  res.send("Thanks for waking me up...")
})

app.get('/checkers', (req, res) => {
  console.log(req.headers)
  console.log(req.body)
  res.send("Just checking are we?")
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
res.send('Sorry, no end-point detected!')})

function selfServer() {

app.listen(PORT, () => {
  console.log(`App is listening on port ${ PORT }`)
})
}

(require.main === module) ? selfServer() : console.log('starting server')
