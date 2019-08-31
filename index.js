require('dotenv').config();

const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const jwt  = require('jsonwebtoken');

const authConfig = {
  user: 'development@barterout.com',
  refreshToken: process.env.EVR_TOKEN,
  accessToken: process.env.EV_TOKEN,
};

const transporter = nodemailer.createTransport({ // secure authentication
  host: 'smtp.gmail.com',
  auth: {
    type: 'OAuth2',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.NEV_CLIENT_SECRET,
  },
});

function sendEmail(emailToSend) {
  transporter.sendMail(emailToSend, (err, info) => {
    if (err) {
      console.error(err); // eslint-disable-line
    } else {
      console.info(info); // eslint-disable-line
    }
  });
}

function matchFoundEmail(emailTo, firstName, token) {
  return {
    from: '"Barter Out" <development@barterout.com',
    to: emailTo,
    subject: 'Match found for you',
    html: `Dear ${firstName}, <br />
    <br />
    We are emailing you to let you know that you have books that have expired on our platform
    <br />
    This means that we take the books off of the public list until you verify that they are still for sale.
    <br />
    If you have any questions, feel free to send us an email at development@barterout.com and we will reply promptly!
    <br />
    <br />
    Oh, one more thing: we are still a developing startup and want to make sure we are building a service that is useful to you. If you have 3-4 minutes to spare, please consider filling in our <a href="https://goo.gl/forms/KMhLK9N7ZFtHTyjF2">short survey</a>. We greatly value your feedback so please send us any comments or concerns.
    <br />
    <br />
    Thank you,<br />
    The BarterOut team
    <br />
    <br />
    Do you like social media as much as we do? Consider:<br />
    Liking us on <a href="https://www.facebook.com/BarterOut/">Facebook</a><br />
    Following us on <a href="https://www.instagram.com/barteroutofficial/">Instagram</a>`,
    auth: { authConfig },
  };
}

function updateBookStatuses(bookIDs) {

}

function sendEmails(userList) {

}

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }
  console.log('Connected to server'); // eslint-disable-line
});

