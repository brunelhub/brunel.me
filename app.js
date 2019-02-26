const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');


// * app.use means “Run this on ALL requests”
// * app.get means “Run this on a GET request, for the given URL”

// init app variable
const app = express();

// view engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Body parser Middleware - get and encode request parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

// create a route
app.get('/', (req, res) => {
  res.render('index');
});

app.post('/ajax', (req, res) => {
  const name = req.body.name;
  const subject = req.body.subject;
  const email = req.body.email;
  // const output = `
  //   <h3>Contact</h3>
  //   <ul>
  //     <li>Nom: ${req.body.name}</li>
  //     <li>Email: ${req.body.email}</li>
  //     <li>Site: ${req.body.site}</li>
  //   </ul>
  //   <h3>Sujet</h3>
  //   <p>${req.body.subject}</p>
  //   <h3>Message</h3>
  //   <p>${req.body.message}</p>
  // `;
  const output = req.body.message;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'ssl0.ovh.net',
    port: 465,
    secure: true,
    auth: {
      user: 'gaetan@brunel.me',
      pass: ''
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: name + '<' + email + '>',
    to: 'gaetan@brunel.me',
    subject: 'Contact : ' + subject,
    html: output
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      // return console.log(error);
      return res.send(false);
    }

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // res.render('index', { msg: 'le message a bien été envoyé' });
    res.send(true);
  });
});

var port = process.env.PORT || 80;
app.listen(port, function () {
  console.log('node server started at ' + port);
});