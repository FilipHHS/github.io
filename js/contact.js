document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const formStatus = document.getElementById('form-status');

    // ==========================================
    // Testbare validatiefuncties (LU4.2)
    // ==========================================

    function validateName(name) {
        const trimmed = name.trim();
        if (trimmed === '') {
            return { isValid: false, message: 'Vul alsjeblieft je naam in.' };
        }
        if (trimmed.length < 2) {
            return { isValid: false, message: 'Naam moet minimaal 2 letters bevatten.' };
        }
        return { isValid: true, message: '' };
    }

    function validateEmail(email) {
        const trimmed = email.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if (trimmed === '') {
            return { isValid: false, message: 'Vul alsjeblieft een e-mailadres in.' };
        }
        if (!emailRegex.test(trimmed)) {
            return { isValid: false, message: 'Vul een geldig e-mailadres in (bijv. naam@domein.nl).' };
        }
        return { isValid: true, message: '' };
    }

    function validateMessage(message) {
        const trimmed = message.trim();
        if (trimmed === '') {
            return { isValid: false, message: 'Het bericht mag niet leeg zijn.' };
        }
        if (trimmed.length < 10) {
            return { isValid: false, message: `Bericht is te kort (minimaal 10 tekens, nu: ${trimmed.length}).` };
        }
        return { isValid: true, message: '' };
    }

    // ==========================================
    // UI Feedback Helpers (LU4.5 / LU3.3)
    // ==========================================

    function showError(inputElement, errorElement, message) {
        inputElement.classList.add('input-error');
        inputElement.setAttribute('aria-invalid', 'true');
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    function clearError(inputElement, errorElement) {
        inputElement.classList.remove('input-error');
        inputElement.removeAttribute('aria-invalid');
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }

    function resetFormState() {
        clearError(nameInput, nameError);
        clearError(emailInput, emailError);
        clearError(messageInput, messageError);
        formStatus.textContent = '';
        formStatus.className = 'form-status';
        formStatus.style.display = 'none';
    }

    // ==========================================
    // Submit Event Listener
    // ==========================================

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        resetFormState();

        const nameResult = validateName(nameInput.value);
        const emailResult = validateEmail(emailInput.value);
        const messageResult = validateMessage(messageInput.value);

        let isFormValid = true;

        if (!nameResult.isValid) {
            showError(nameInput, nameError, nameResult.message);
            isFormValid = false;
        }

        if (!emailResult.isValid) {
            showError(emailInput, emailError, emailResult.message);
            isFormValid = false;
        }

        if (!messageResult.isValid) {
            showError(messageInput, messageError, messageResult.message);
            isFormValid = false;
        }

        if (!isFormValid) {
            formStatus.textContent = 'Corrigeer de gemarkeerde velden hierboven.';
            formStatus.className = 'form-status status-error';
            formStatus.style.display = 'block';
            return;
        }

        formStatus.textContent = 'Bedankt voor je bericht! Het formulier is succesvol verzonden.';
        formStatus.className = 'form-status status-success';
        formStatus.style.display = 'block';

        form.reset();
    });
});