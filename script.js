/**
 * addEventListener() - Method that attaches an event handler to the specified element
 * SYNTAX: element.addEventListener(event, function, useCapture);
 */

const form = document.getElementById("userRegisterForm");

const userName = document.getElementById("userName");
const userMail = document.getElementById("userMail");
const userPassword = document.getElementById("userPassword");
const userConfirmPassword = document.getElementById("userConfirmPassword");
const userAcceptTerms = document.getElementById("userAcceptTerms");

const userNameError = document.getElementById("userNameError");
const userMailError = document.getElementById("userMailError");
const userPasswordError = document.getElementById("userPasswordError");
const userConfirmPasswordError = document.getElementById("userConfirmPasswordError");
const userAcceptTermsError = document.getElementById("userAcceptTermsError");

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    // Validate username
    if (userName.value.trim() === '') {
        userNameError.classList.add('visible');
    } else {
        userNameError.classList.remove('visible');
    }
  
    // Validate email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(userMail.value)) {
        userMailError.classList.add('visible');
    } else {
        userMailError.classList.remove('visible');
    }

    // Validate password
    if (userPassword.value.length < 8) {
        userPasswordError.classList.add('visible');
    } else {
        userPasswordError.classList.remove('visible');
    }

    // Validate confirm password
    if (userConfirmPassword.value === '' || userConfirmPassword.value !== userPassword.value) {
        userConfirmPasswordError.classList.add('visible');
    } else {
        userConfirmPasswordError.classList.remove('visible');
    }

    // Validate accept terms and usage checkbox
    if(!userAcceptTerms.checked) {
        userAcceptTermsError.classList.add('visible');
    } else {
        userAcceptTermsError.classList.remove('visible');
    }

})



