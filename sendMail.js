var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kattymiao75@gmail.com',
    pass: '19kat9M9'
  }
});

var mailOptions = {
  from: 'kattymiao75@gmail.com',
  to: 'katmiao@g.ucla.edu',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});