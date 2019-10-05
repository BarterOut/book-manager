require('dotenv').config();

const nodemailer = require('nodemailer');
const fs = require('fs');
const readline = require('readline');
const deactivatedBook = require('./emails');

const SEND_BUFFER_TIME = 60000;

const transporter = nodemailer.createTransport({ // secure authentication
  host: 'smtp.gmail.com',
  auth: {
    type: 'OAuth2',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.NEV_CLIENT_SECRET,
  },
});

const readInterface = readline.createInterface({
  input: fs.createReadStream('./email_list.txt'),
  console: false,
});

/**
 * Sends out out an email from development@barterout.com
 * given valid mailOptions.
 * @param {Object} mailOptions Required options for transporter package
 */
function sendEmail(mailOptions) {
  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      throw new Error(`Error: ${error}`);
    }
  });
}

/**
 * Util function to wait for ms milliseconds
 * @param {Number} ms Milliseconds to sleep for.
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const lines = [];
let line_counter = 0;

readInterface.on('line', (line) => {
  lines.push(line);
  line_counter++;
  if (line_counter == 24) { console.log(lines); }
});

async function run() {
  for (let i = 0; i < lines.length; i++) {
    const splitted = lines[i].split(' ');
    const name = splitted[0];
    const email = splitted[splitted.length - 1];

    console.log(`Sent Email to: ${email}`);

    sendEmail(deactivatedBook(email, name));
    // wait 60 seconds
    await sleep(SEND_BUFFER_TIME);
  }
}
