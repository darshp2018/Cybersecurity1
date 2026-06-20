document.getElementById("contactForm").addEventListener("submit", function(event) {

    let fullName = document.getElementById("fname").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let subjectError = document.getElementById("subjectError");
    let messageError = document.getElementById("messageError");

    let isValid = true;

    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";

    if (fullName === "") {
        nameError.textContent = "Please enter your full name.";
        isValid = false;
    }

    if (email === "") {
        emailError.textContent = "Please enter your email address.";
        isValid = false;
    } else if (!email.includes("@") || !email.includes(".")) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (subject === "") {
        subjectError.textContent = "Please enter a subject.";
        isValid = false;
    }

    if (message === "") {
        messageError.textContent = "Please enter a message.";
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    } else {
        alert("Form submitted successfully!");
    }

});