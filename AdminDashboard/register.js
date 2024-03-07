document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById("signupForm");

    signupForm.addEventListener('submit', saveInfo);

    async function saveInfo(event) {
        event.preventDefault(); // Prevent the default form submission

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var username = document.getElementById("username").value;
        var contact = document.getElementById("contact").value;
        var password = document.getElementById("password").value;
        var repassword = document.getElementById("repassword").value;
       
        
        var formData = {
            fullName: name,
            email: email,
            username: username,
            phoneNumber: contact,
            password: password,
            confirmPassword: repassword
        };

        try {
            let response = await fetch('http://localhost:8080/admin/addNewAdmin', {
                method: 'POST',
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log("Registration successful!");
                window.location.href = 'login.html';
            } else {
                console.error("Registration failed. Status:", response.status);
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }
});
