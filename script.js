document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginBtn = document.getElementById('loginBtn');

    function validateInputs() {
        const u = usernameInput.value.trim();
        const p = passwordInput.value.trim();
        if (u.length > 0 && p.length >= 6) {
            loginBtn.disabled = false;
            loginBtn.style.opacity = "1";
        } else {
            loginBtn.disabled = true;
            loginBtn.style.opacity = "0.5";
        }
    }

    usernameInput.addEventListener('input', validateInputs);
    passwordInput.addEventListener('input', validateInputs);
});
