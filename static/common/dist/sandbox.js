"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let emailInput = document.getElementById('emailInputID');
let passwordInput = document.getElementById('passwordID');
const form = document.getElementById('mainForm');
const messages_msg = document.getElementById('messagesID');
let showPasswordBttn = document.getElementById('showPass');
let hidePasswordBttn = document.getElementById('hidePass');
function show_message(message) {
    messages_msg.style.display = 'block';
    messages_msg.innerHTML = `<div style="
  color: black;
  text-align: center; 
  font-size: 18px; 
  padding: 10px; 
  font-family:Arial, Helvetica, sans-serif;
  ">${message}</div>`;
    setTimeout(function () {
        messages_msg.style.display = 'none';
    }, 3000);
}
;
function check_email(email, password) {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('pass', password);
    return fetch('/checking_backend_SQL', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => data)
        .catch(error => {
        console.error('Error:', error);
    });
}
;
function error_email() {
    emailInput.style.borderBottom = '2px solid red';
    emailInput.style.backgroundColor = '#33333300';
    show_message('Incorrect email!');
}
;
function error_password() {
    passwordInput.style.borderBottom = '2px solid red';
    passwordInput.style.backgroundColor = '#33333300';
    show_message('Incorrect password!');
}
;
function both() {
    emailInput.style.borderBottom = '2px solid red';
    passwordInput.style.borderBottom = '2px solid red';
    show_message('Double Check Values');
}
form.addEventListener('submit', function (event) {
    return __awaiter(this, void 0, void 0, function* () {
        event.preventDefault();
        let emailValue = emailInput.value;
        let passwordValue = passwordInput.value;
        let emailCheck = yield check_email(emailValue, passwordValue);
        let ED = emailCheck.email;
        let PD = emailCheck.pass;
        console.log(emailCheck);
        if (ED === 'true' && PD === "true") {
            form.submit();
        }
        else if (ED === 'false' && PD === 'false') {
            both();
        }
        else if (ED === 'true' && PD === 'false') {
            error_password();
        }
        else if (ED === 'false' && PD === 'true') {
            error_email();
        }
    });
});
function show_password(state) {
    let showpwdID = document.getElementById('showpwdID');
    if (state == 'show') {
        showPasswordBttn.style.display = 'none';
        hidePasswordBttn.style.display = 'block';
        // showpwdID.style.textAlign = 'end';
        passwordInput.setAttribute('type', 'text');
    }
    else {
        showPasswordBttn.style.display = 'block';
        hidePasswordBttn.style.display = 'none';
        // showpwdID.style.textAlign = 'end';
        passwordInput.setAttribute('type', 'password');
    }
}
