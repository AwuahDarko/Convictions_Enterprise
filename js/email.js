const contact = document.getElementById("submit-contact");


function resetInputs() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
}

function sendContact(evt) {
    evt.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const _message = document.getElementById("message").value;

    const body = `${_message}
    **sent by**: ${name}
    `
    Email.send({
        SecureToken: "e5277663-a8b4-4903-b418-f74ee200ec4c",
        To: 'convictions4success@gmail.com',
        From: "info@convictionsenterprise.com",
        Subject: subject,
        Body: body
    }).then(
        (message) => {
            if (message === "OK") {
                resetInputs();
                alert("We have received your message, Thank you!");
            } else {
                alert("Your message was not sent, check your internet connection");
            }
        }
    );
}

contact.addEventListener("submit", sendContact);