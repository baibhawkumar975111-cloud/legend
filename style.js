// Wait for page load
document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".auth-wrapper");
    const registerBtn = document.querySelector(".register-trigger");
    const loginBtn = document.querySelector(".login-trigger");

    const signinForm = document.querySelector(
        ".credentials-panel.signin form"
    );
    const signupForm = document.querySelector(
        ".credentials-panel.signup form"
    );

    // =============================
    // SWITCH LOGIN / REGISTER VIEW
    // =============================
    registerBtn.addEventListener("click", (e) => {
        e.preventDefault();
        wrapper.classList.add("toggled");
    });

    loginBtn.addEventListener("click", (e) => {
        e.preventDefault();
        wrapper.classList.remove("toggled");
    });

    // =============================
    // SIGNUP SYSTEM
    // =============================
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const inputs = signupForm.querySelectorAll("input");
        const username = inputs[0].value.trim();
        const email = inputs[1].value.trim();
        const password = inputs[2].value.trim();

        if (!username || !email || !password) {
            alert("Please fill all fields.");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Check existing user
        const exists = users.find(
            u => u.username === username || u.email === email
        );

        if (exists) {
            alert("User already exists!");
            return;
        }

        users.push({ username, email, password });
        localStorage.setItem("users", JSON.stringify(users));

        alert("Registration successful! Please login.");

        signupForm.reset();
        wrapper.classList.remove("toggled");
    });

    // =============================
    // LOGIN SYSTEM
    // =============================
    signinForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const inputs = signinForm.querySelectorAll("input");
        const username = inputs[0].value.trim();
        const password = inputs[1].value.trim();

        let users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(
            u => u.username === username && u.password === password
        );

        if (!user) {
            alert("Invalid login credentials.");
            return;
        }

        alert("Login successful!");

        // Save session
        localStorage.setItem("loggedInUser", user.username);

        // Redirect example (change page if needed)
        // window.location.href = "dashboard.html";
    });
});
