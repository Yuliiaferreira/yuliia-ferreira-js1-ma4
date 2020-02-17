//
const selectContactForm = document.getElementById("contactForm");
const inputFirstName = document.getElementById("firstName");
const selectFirstNameError = document.getElementById("firstNameError");
const firstNameValue = inputFirstName.value;

selectContactForm.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();

    if (checkInputLength(firstNameValue) === true) {
        selectFirstNameError.style.display = "none";
        
    } else {
        selectFirstNameError.style.display = "block";
    }
}

function checkInputLength(value) {
    const trValue = value.trim();
    if (trValue.length >= 2) {
        return true;
    } else {
        return false;
    }
}
