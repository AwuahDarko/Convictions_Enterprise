const subscribe = document.getElementById("subscribe");


function _resetInputs() {
    document.getElementById("mail").value = "";
}

subscribe.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const email = document.getElementById("mail").value;

    const body = `Hello, I have subscribed to you with my Email: ${email}`

    Email.send({
        SecureToken: "e5277663-a8b4-4903-b418-f74ee200ec4c",
        To: 'convictions4success@gmail.com',
        From: "info@convictionsenterprise.com",
        Subject: "Subscription",
        Body: body
    }).then(
        (message) => {
            if (message === "OK") {
                _resetInputs();
                alert("Thanks for your subscription");
            } else {
                alert("Subscription failed, check your internet connection");
            }
        }
    );
});