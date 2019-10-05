const authConfig =  require('./authConfig');

function deactivatedBook(emailTo, firstName) {
  return {
    from: '"Barter Out" <development@barterout.com',
    to: emailTo,
    subject: '[BarterOut] Book Deactivation',
    html: `Dear ${firstName}, <br />
    \n
    We are emailing you to notify you that you have book(s) that have been deactivated due to inactivity.
    <br></br>
    We periodically unlist books that have been on the platform for a long time. If you still have the book(s)
    and want to sell them, you can reactivate them. Alternatively, you can delete the posting all together.
    Please visit <a href="https://www.barterout.com" target="_blank">the website</a>
    and navigate to the manage posts section.
    <br /> \n
    <br />
    If you have any questions, feel free to send us an email at development@barterout.com!\n
    <br /> <br />
    Thank you,<br />
    The BarterOut team<br /> <br />
    \n
    Like us on <a href="https://www.facebook.com/BarterOut/" target="_blank">Facebook</a> <br />
    Follow us on <a href="https://www.instagram.com/barteroutofficial/" target="_blank">Instagram</a>`,
    auth: authConfig,
  };
};

module.exports = deactivatedBook;