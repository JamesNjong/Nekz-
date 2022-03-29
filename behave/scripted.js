function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "jamesberinyuy@gmail.com",
    Password: "formathematics",
    To: "wanabi.info@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Contact Form Inquiry : Nekz website",
    Body:
      "Name :" +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br>" +
      getElementById("message").value,
  }).then(message => alert(message));
}
