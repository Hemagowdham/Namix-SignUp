/**
 * addEventListener() - Method that attaches an event handler to the specified element
 * SYNTAX: element.addEventListener(event, function, useCapture);
 */

const userName = document.getElementById("userName");
const userMail = document.getElementById("userMail");
const userPassword = document.getElementById("userPassword");
const userConfirmPassword = document.getElementById("userConfirmPassword");
const userAcceptTerms = document.getElementById("userAcceptTerms");
const userAccountCreateButton = document.getElementById("userAccountCreateButton");
const userRegisterForm = document.getElementById("userRegisterForm");

function checkInputs() {
    const userNameValue = userName.value.trim();
    const userMailValue = userMail.value.trim();
    const userPasswordValue = userPassword.value;
    const userConfirmPasswordValue = userConfirmPassword.value;
    const userAcceptTermsValue = userAcceptTerms.value;

}

form.addEventListener('submit', (e)=>{

    e.preventDefault();
    checkInputs();
})


