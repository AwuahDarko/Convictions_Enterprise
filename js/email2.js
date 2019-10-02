const quote = document.querySelector("#quote");




function resetInputs() {
    document.getElementById("f-name").value = "";
    document.getElementById("l-name").value = "";
    document.getElementById("guidance").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
}

function sendQuote(evt) {
    evt.preventDefault();
    const fName = document.getElementById("f-name").value;
    const lName = document.getElementById("l-name").value;
    const guidance = document.getElementById("guidance").value;
    const phone = document.getElementById("phone").value;
    const _message = document.getElementById("message").value;

    const body = `${_message} **My name is ${fName} ${lName}, My Contact: ${phone}, The Service I want is: ${guidance}**`;
    console.log(quote)
    Email.send({
        SecureToken: "e5277663-a8b4-4903-b418-f74ee200ec4c",
        To: 'convictions4success@gmail.com',
        From: "info@convictionsenterprise.com",
        Subject: "Quote",
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


quote.addEventListener("submit", sendQuote);