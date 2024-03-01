

const scriptURL =
"https://script.google.com/macros/s/AKfycbysdo2UeAw1G9t5waSJoPn8YJCvFTsB4t_2xCH7giw3whGekYMXFfVd7s6YFbwmekwYpA/exec";
const form = document.forms["email-subscription-form"];

const msg = document.querySelector("#msg");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
        msg.innerHTML="Thanks for Subscribing!";
        setTimeout(() => {
            msg.innerHTML="";
        }, 2000);
        form.reset();
    })
    .catch(error => console.log("Error", error.message));
});
