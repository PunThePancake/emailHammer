function sendEmail() {
        
    const emailVal = document.querySelector('.target').value;
    console.log(emailVal);
    
    Email.send({
      Host: "smtp.gmail.com",
      Username: "sender@email_address.com",
      Password: "Enter your password",
      To: getVal(),
      From: "sender@email_address.com",
      Subject: "subject",
      Body: "body",
    })
      .then(function (message) {
        alert("mail sent successfully")
      });
}