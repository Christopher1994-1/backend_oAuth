let emailInput: any = document.getElementById('emailInputID');
let passwordInput: any = document.getElementById('passwordID');
const form = document.getElementById('mainForm') as HTMLFormElement;
const messages_msg = document.getElementById('messagesID')!;
let showPasswordBttn:any = document.getElementById('showPass');
let hidePasswordBttn:any = document.getElementById('hidePass');




function show_message(message:string) {
  messages_msg.style.display = 'block';
  messages_msg.innerHTML = `<div style="
  color: black;
  text-align: center; 
  font-size: 18px; 
  padding: 10px; 
  font-family:Arial, Helvetica, sans-serif;
  ">${message}</div>`;

  setTimeout(function() {
      messages_msg.style.display = 'none';
  }, 3000);
};




function check_email(email:string, password:string) {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('pass', password)
  
    return fetch('/checking_backend_SQL', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => data)
      .catch(error => {
        console.error('Error:', error);
      });
};
  



function error_email() {
  emailInput.style.borderBottom = '2px solid red';
  emailInput.style.backgroundColor = '#33333300';
  show_message('Incorrect email!')
};


function error_password() {
  passwordInput.style.borderBottom = '2px solid red';
  passwordInput.style.backgroundColor = '#33333300';
  show_message('Incorrect password!')
};


function both() {
  emailInput.style.borderBottom = '2px solid red';
  passwordInput.style.borderBottom = '2px solid red';
  show_message('Double Check Values')
}


  
form.addEventListener('submit', async function (event) {
  event.preventDefault();

  let emailValue = emailInput.value;
  let passwordValue = passwordInput.value;

  let emailCheck = await check_email(emailValue, passwordValue);
  let ED = emailCheck.email;
  let PD = emailCheck.pass;
  console.log(emailCheck)

  if (ED === 'true' && PD === "true") {
    form.submit()
  }
  else if (ED === 'false' && PD === 'false') {
    both()
  }
  else if (ED === 'true' && PD === 'false') {
    error_password()
  }
  else if (ED === 'false' && PD === 'true') {
    error_email()
  } 
});
  


function show_password(state:string) {
  let showpwdID:any = document.getElementById('showpwdID');

  if (state == 'show') {
    showPasswordBttn.style.display = 'none';
    hidePasswordBttn.style.display = 'block';
    // showpwdID.style.textAlign = 'end';
    passwordInput.setAttribute('type', 'text');

  } else {
    showPasswordBttn.style.display = 'block';
    hidePasswordBttn.style.display = 'none';
    // showpwdID.style.textAlign = 'end';
    passwordInput.setAttribute('type', 'password');
  }


}