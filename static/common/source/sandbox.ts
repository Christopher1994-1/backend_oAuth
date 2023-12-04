let emailInput: any = document.getElementById('emailInputID');
let passwordInput: any = document.getElementById('passwordID');
const form = document.getElementById('mainForm')!




function check_email(email:string) {
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
  

  
  form.addEventListener('submit', async function (event) {
    event.preventDefault();
  
    let emailValue = emailInput.value;
  
    try {
      let emailCheck = await check_email(emailValue);
      console.log(emailCheck);
      // Continue with the logic using the emailCheck value
    } catch (error) {
      // Handle errors if necessary
      console.error('Error:', error);
    }
  });
  