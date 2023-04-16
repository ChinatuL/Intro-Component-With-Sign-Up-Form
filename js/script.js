// Select form
const form = document.querySelector(".registration__form");

// Select form inputs
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

// Select error icons
const firstNameIcon = document.getElementById("firstname-error-icon");
const lastNameIcon = document.getElementById("lastname-error-icon");
const emailIcon = document.getElementById("email-error-icon");
const passwordIcon = document.getElementById("password-error-icon");

// check if input has no value
const isRequired = (value) => {
    if (value === "") {
        return false;
    } else {
        return true;
    }
};

// error indicator function
const showError = (input, errorMessage) => {
    input.classList.add("invalid");
    input.placeholder = "";
    input.setAttribute("aria-invalid", true)
    const error = input.parentElement.querySelector("p");
    error.textContent = errorMessage;
    error.style.display = "block";
};

// success indicator function
const showSuccess = (input) => {
    input.classList.remove("invalid");
    input.setAttribute("aria-invalid", false);
    const error = input.parentElement.querySelector("p");
    error.textContent = "";
    error.style.display = "none";
};

const validateFirstName = () => {
    const firstNameValue = firstName.value.trim();
    if (!isRequired(firstNameValue)) {
        firstNameIcon.style.display = "block";
        showError(firstName, "First Name cannot be empty");
        return false;
    } else {
        firstNameIcon.style.display = "none";
        showSuccess(firstName);
        return true;
    }
};

const validateLastName = () => {
    const lastNameValue = lastName.value.trim();
    if (!isRequired(lastNameValue)) {
        lastNameIcon.style.display = "block";
        showError(lastName, "Last Name cannot be empty");
        return false;
    } else {
        lastNameIcon.style.display = "none";
        showSuccess(lastName);
        return true;
    }
};

const validateEmail = () => {
    const emailValue = email.value.trim();
    const regex =
        /^[\w.! #$%&'*+=? ^_`{|}~-]+@[a-zA-Z0-9-]+([\.-]?\w+)*(\.\w{2,3})+$/gm;
    if (!isRequired(emailValue) || !emailValue.match(regex)) {
        email.classList.add("red-value");
        emailIcon.style.display = "block";
        showError(email, "Looks like this is not an email");
        return false;
    } else {
        email.classList.remove("red-value");
        emailIcon.style.display = "none";
        showSuccess(email);
        return true;
    }
};

const validatePassword = () => {
    const passwordValue = password.value.trim();
    if (!isRequired(passwordValue)) {
        passwordIcon.style.display = "block";
        showError(password, "Password cannot be empty");
    } else {
        passwordIcon.style.display = "none";
        showSuccess(password);
        return true;
    }
};

// add submit event on form
form.addEventListener("submit", (e) => {
    const isFirstNameValid = validateFirstName();
    const isLastNameValid = validateLastName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (
        isFirstNameValid &&
        isLastNameValid &&
        isEmailValid &&
        isPasswordValid
    ) {
        return true;
    } else {
        e.preventDefault();
    }
});
