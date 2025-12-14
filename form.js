function validateForm() {
  let isValid = true;

 
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();

  
  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("phoneError").innerText = "";
  document.getElementById("passwordError").innerText = "";

 
  if (name === "" || name.length < 3) {
    document.getElementById("nameError").innerText = "Name must be at least 3 characters";
    isValid = false;
  }

  
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").innerText = "Enter a valid email";
    isValid = false;
  }

  
  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone)) {
    document.getElementById("phoneError").innerText = "Enter a valid 10-digit phone number";
    isValid = false;
  }

  
  if (password.length < 6) {
    document.getElementById("passwordError").innerText = "Password must be at least 6 characters";
    isValid = false;
  }

  return isValid;
}