function calculateAge() {
  const dobInput = document.getElementById('dob').value;
  if (!dobInput) {
    document.getElementById('results').textContent = "Please select a valid date!";
    return;
  }

  const dob = new Date(dobInput);
  const today = new Date();

  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();

  // Adjust if birthday hasn't occurred yet this year
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  document.getElementById('results').textContent = You are ${age} years old.;
}