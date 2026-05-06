document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form');
    const submitBtn = document.querySelector('.btn-submit');
    const inputs = document.querySelectorAll('input');

    // وظيفة للتحقق من أن الخانات ليست فارغة
    function checkInputs() {
        let allFilled = true;
        inputs.forEach(input => {
            if (input.value.trim() === '') {
                allFilled = false;
            }
        });
        
        // تفعيل أو تعطيل الزر بناءً على المدخلات
        if (allFilled) {
            submitBtn.style.opacity = '1';
            submitBtn.style.cursor = 'pointer';
            submitBtn.disabled = false;
        } else {
            submitBtn.style.opacity = '0.5';
            submitBtn.style.cursor = 'not-allowed';
            submitBtn.disabled = true;
        }
    }

    // الاستماع لأي تغيير في الكتابة داخل الخانات
    inputs.forEach(input => {
        input.addEventListener('input', checkInputs);
    });

    // عند الضغط على زر الإرسال
    loginForm.addEventListener('submit', () => {
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Verifying...';
        submitBtn.style.background = '#004294';
    });

    // تشغيل التحقق لأول مرة عند تحميل الصفحة
    checkInputs();
});
