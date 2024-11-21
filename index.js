document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const inputs = form.querySelectorAll("input");
    const passwordInput = form.querySelector("input[name='password']");
    const confirmPasswordInput = form.querySelector("input[name='confirmPassword']");
    const submitButton = form.querySelector('button[type="submit"]');

    // Disable the submit button initially
    submitButton.disabled = true;

    // Add focus to input when clicking its label
    const labels = form.querySelectorAll("label");
    labels.forEach(label => {
        label.addEventListener("click", function () {
            const inputName = this.getAttribute("data-input");
            const input = form.querySelector(`input[name="${inputName}"]`);
            if (input) {
                input.focus();
            }
        });
    });

    // Function to validate all inputs
    function checkInputs() {
        const name = form.querySelector('input[name="name"]').value.trim();
        const username = form.querySelector('input[name="username"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();
        // Check if all fields are filled
        const allFieldsFilled = name && username && email && password && confirmPassword;

        if (allFieldsFilled) {
            console.log("All fields are filled.");
            submitButton.disabled = false;
        } else {
            console.log("Please fill in all fields.");
            submitButton.disabled = true;
        }

        // Check if password length is at least 8 characters
        if (password.length >= 8) {
            console.log("Password is at least 8 characters long.");
            passwordInput.classList.remove('invalid');
        } else {
            console.log("Password should be at least 8 characters long.");
            passwordInput.classList.add('invalid');
        }

        // Check if password and confirm password match 
        if (password === confirmPassword) {
            confirmPasswordInput.classList.remove('invalid');
        } else {
            console.log("Passwords do not match.");
            submitButton.disabled = true;
            confirmPasswordInput.classList.add('invalid');
        }
       
    }

    // Add event listeners to validate inputs dynamically
    inputs.forEach(input => {
        input.addEventListener("input", checkInputs);
    });

    // Handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent actual form submission
        const registrationData = {
            name: form.querySelector('input[name="name"]').value.trim(),
            username: form.querySelector('input[name="username"]').value.trim(),
            email: form.querySelector('input[name="email"]').value.trim(),
            password: passwordInput.value.trim(),
        };
        console.log(registrationData);
        alert(JSON.stringify(registrationData));
    });

    // Initial validation
    checkInputs();
});
