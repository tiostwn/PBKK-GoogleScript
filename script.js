const scriptURL =
  "https://script.google.com/macros/s/AKfycbyLFanU9JcwxClaGWjtY2iDjbrexcw4ndNoh9YylPjwqrAAdPHU-IXBaTuq49YsrDeiAA/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => alert("Thank you! Form is submitted successfully."))
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error! Something's wrong", error.message));
});
