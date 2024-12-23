// Here’s how you can create a basic form in plain JavaScript with email and password validation. This code doesn't rely on any frameworks and will display error messages if validation fails.
//    Explanation
//    1. HTML Structure: there are two input fields: one for email and one for password.
// Error messages are displayed in <span> elements with the error class.
//   2. JavaScript Validation:
//   On form submission, we prevent the default submission action.
//   We validate the email with a regular expression and check the password length.
//   If validation fails, appropriate error messages are shown.
//   If both validations pass, a success message is displayed, and the form is reset.

//! HTML + JavaScript Code:
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Basic Form with Validation</title>
//   <style>
//     .error { color: red; }
//   </style>
// </head>
// <body>
//   <h2>Basic Form</h2>
//   <form id="basicForm">
//     <label for="email">Email:</label>
//     <input type="text" id="email" name="email">
//     <span id="emailError" class="error"></span>
//     <br><br>

//     <label for="password">Password:</label>
//     <input type="password" id="password" name="password">
//     <span id="passwordError" class="error"></span>
//     <br><br>
//     <button type="submit">Submit</button>
//   </form>
//   <script>
//   </script>
// </body>
// </html>

const form = document.getElementById("basicForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Clear previous error messages
  emailError.textContent = "";
  passwordError.textContent = "";

  let isValid = true;

  // Email validation
  const emailValue = emailInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailValue)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  // Password validation
  const passwordValue = passwordInput.value;
  if (passwordValue.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters long.";
    isValid = false;
  }

  // Submit form if valid
  if (isValid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});
