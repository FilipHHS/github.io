document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const statusBox = document.getElementById('form-status');

    // Functie om e-mailnotatie te testen
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Foutmelding tonen bij een specifiek veld
    function setError(input, errorElementId, message) {
        const errorElement = document.getElementById(errorElementId);
        input.classList.add('input-error');
        errorElement.textContent = message;
    }

    // Foutmelding weghalen
    function clearError(input, errorElementId) {
        const errorElement = document.getElementById(errorElementId);
        input.classList.remove('input-error');
        errorElement.textContent = '';
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Voorkom dat de pagina herlaadt

        let isValid = true;
        statusBox.textContent = '';
        statusBox.className = 'form-status';

        // 1. Naam validatie
        if (nameInput.value.trim() === '') {
            setError(nameInput, 'name-error', 'Vul alstublieft je naam in.');
            isValid = false;
        } else {
            clearError(nameInput, 'name-error');
        }

        // 2. E-mail validatie
        const emailValue = emailInput.value.trim();
        if (emailValue === '') {
            setError(emailInput, 'email-error', 'Vul alstublieft een e-mailadres in.');
            isValid = false;
        } else if (!isValidEmail(emailValue)) {
            setError(emailInput, 'email-error', 'Vul een geldig e-mailadres in (bijv. naam@domein.nl).');
            isValid = false;
        } else {
            clearError(emailInput, 'email-error');
        }

        // 3. Bericht validatie
        if (messageInput.value.trim().length < 10) {
            setError(messageInput, 'message-error', 'Je bericht moet minimaal 10 tekens bevatten.');
            isValid = false;
        } else {
            clearError(messageInput, 'message-error');
        }

        // Als alles klopt: toon succesbericht en maak het formulier leeg
        if (isValid) {
            statusBox.textContent = 'Bedankt! Je bericht is succesvol verzonden.';
            statusBox.classList.add('success');
            form.reset();
        }
    });
});