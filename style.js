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

    // SWITCH LOGIN / REGISTER VIEW
    registerBtn.addEventListener("click", (e) => {
        e.preventDefault();
        wrapper.classList.add("toggled");
    });

    loginBtn.addEventListener("click", (e) => {
        e.preventDefault();
        wrapper.classList.remove("toggled");
    });

    // SIGNUP
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const inputs = signupForm.querySelectorAll("input");
        const username = inputs[0].value.trim();
        const email = inputs[1].value.trim();
        const password = inputs[2].value.trim();

        if (!username || !email || !password) {
            alert("Fill all fields");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];

        const exists = users.find(
            u => u.username === username || u.email === email
        );

        if (exists) {
            alert("User already exists!");
            return;
        }

        users.push({ username, email, password });
        localStorage.setItem("users", JSON.stringify(users));

        alert("Registered! Now login.");
        signupForm.reset();
        wrapper.classList.remove("toggled");
    });

    // LOGIN
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
            alert("Invalid login");
            return;
        }

        localStorage.setItem("loggedInUser", user.username);

        // Redirect to dashboard
        window.location.href = "dashboard.html";
    });
});
