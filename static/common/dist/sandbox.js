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
function check_email(email) {
    const formData = new FormData();
    formData.append('email', email);
    return fetch('/checking_backend_SQL', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => data.data)
        .catch(error => {
        console.error('Error:', error);
    });
}
form.addEventListener('submit', function (event) {
    return __awaiter(this, void 0, void 0, function* () {
        event.preventDefault();
        let emailValue = emailInput.value;
        try {
            let emailCheck = yield check_email(emailValue);
            console.log(emailCheck);
            // Continue with the logic using the emailCheck value
        }
        catch (error) {
            // Handle errors if necessary
            console.error('Error:', error);
        }
    });
});
