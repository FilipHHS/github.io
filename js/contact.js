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

    // RegEx voor een strikte e-mailcontrole
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    form.addEventListener('submit', (event) => {
        // 1. Voorkom ALTIJD het herladen van de pagina
        event.preventDefault();

        let isValid = true;
        resetStatus();

        // 1. VELD: NAAM VALIDATIE
        const nameVal = nameInput.value.trim();
        if (nameVal === '') {
            showError(nameInput, nameError, 'Vul alsjeblieft je naam in.');
            isValid = false;
        } else if (nameVal.length < 2) {
            showError(nameInput, nameError, 'Naam moet minimaal 2 letters bevatten.');
            isValid = false;
        }

        // 2. VELD: E-MAIL VALIDATIE
        const emailVal = emailInput.value.trim();
        if (emailVal === '') {
            showError(emailInput, emailError, 'Vul alsjeblieft een e-mailadres in.');
            isValid = false;
        } else if (!emailRegex.test(emailVal)) {
            showError(emailInput, emailError, 'Vul een geldig e-mailadres in (bijv. naam@domein.nl).');
            isValid = false;
        }

        // 3. VELD: BERICHT VALIDATIE
        const messageVal = messageInput.value.trim();
        if (messageVal === '') {
            showError(messageInput, messageError, 'Het bericht mag niet leeg zijn.');
            isValid = false;
        } else if (messageVal.length < 10) {
            showError(messageInput, messageError, `Bericht is te kort (minimaal 10 tekens, nu: ${messageVal.length}).`);
            isValid = false;
        }

        // BLOKKEER ALS ER FOUTEN ZIJN
        if (!isValid) {
            formStatus.textContent = 'Corrigeer de gemarkeerde velden hierboven.';
            formStatus.className = 'form-status status-error';
            formStatus.style.display = 'block';
            return; // Breek hier direct af!
        }

        // ALLES IS GOED: Toon succesbericht en reset formulier
        formStatus.textContent = 'Bedankt voor je bericht! Het formulier is succesvol verzonden.';
        formStatus.className = 'form-status status-success';
        formStatus.style.display = 'block';

        form.reset();
    });

    function showError(inputElement, errorElement, message) {
        inputElement.classList.add('input-error');
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    function resetStatus() {
        [nameInput, emailInput, messageInput].forEach(input => {
            input.classList.remove('input-error');
        });
        [nameError, emailError, messageError].forEach(err => {
            err.textContent = '';
            err.style.display = 'none';
        });
        formStatus.textContent = '';
        formStatus.className = 'form-status';
        formStatus.style.display = 'none';
    }
});