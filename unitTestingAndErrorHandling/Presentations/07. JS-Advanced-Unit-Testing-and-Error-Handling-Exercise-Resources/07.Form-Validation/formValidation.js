function validate() {
    let buttonElement = document.getElementById('submit');
    let usernameElement = document.getElementById('username');
    let emailElement = document.getElementById('email');
    let passwordElement = document.getElementById('password');
    let confirmPasswordElement = document.getElementById('confirm-password');
    let companyCheckboxElement = document.getElementById('company');
    let companyInfoElement = document.getElementById('companyInfo');
    let companyNumberElement = document.getElementById('companyNumber');
    let validElement = document.getElementById('valid');

    let usernamePattern = /\b[A-Za-z0-9]{3,20}\b/;
    let emailPattern = /.*@.*\..*/;
    let passwordPattern = /\b\w{5,15}\b/;
    let companyNumberPattern = /\b[1-9]\d{3,3}\b/;

    companyCheckboxElement.addEventListener('click', (e) => {
        if (e.currentTarget.checked) {
            companyInfoElement.style.display = 'block';
        } else {
            companyInfoElement.style.display = 'none';
        }
    });
    buttonElement.addEventListener('click', (e) => {
        e.preventDefault();
        let matchUsername = usernamePattern.exec(usernameElement.value);
        let matchEmail = emailPattern.exec(emailElement.value);
        let matchPassword = passwordPattern.exec(passwordElement.value);
        let matchConfirmPassword = passwordPattern.exec(confirmPasswordElement.value);
        let matchCompanyNumber = companyNumberPattern.exec(companyNumberElement.value);
        let flagUsername = false;
        let flagEmail = false;
        let flagPassword = false;
        let flagConfirmPassword = false;
        let flagCompanyNumber = false;

        if (matchUsername == null) {
            usernameElement.style.border = '2px solid';
            usernameElement.style.borderColor = 'red';
            flagUsername = false;
        } else {
            usernameElement.style.border = 'none';
            flagUsername = true;
        }
        if (matchEmail == null) {
            emailElement.style.border = '2px solid';
            emailElement.style.borderColor = 'red';
            flagEmail = false;
        } else {
            emailElement.style.border = 'none';
            flagEmail = true;
        }
        if (matchPassword == null) {
            passwordElement.style.border = '2px solid';
            passwordElement.style.borderColor = 'red';
            flagPassword = false;
        } else if ((matchPassword != null && matchConfirmPassword != null) && (matchPassword[0] == matchConfirmPassword[0])) {
            passwordElement.style.border = 'none';
            confirmPasswordElement.style.border = 'none';
            flagPassword = true;
            flagConfirmPassword = true;
        } else {
            passwordElement.style.border = '2px solid';
            passwordElement.style.borderColor = 'red';
            confirmPasswordElement.style.border = '2px solid';
            confirmPasswordElement.style.borderColor = 'red';
            flagPassword = false;
            flagConfirmPassword = false;
        }
        if (matchConfirmPassword == null) {
            confirmPasswordElement.style.border = '2px solid';
            confirmPasswordElement.style.borderColor = 'red';
            flagConfirmPassword = false;
        }
        if (companyCheckboxElement.checked) {
            if (matchCompanyNumber == null) {
                companyNumberElement.style.border = '2px solid';
                companyNumberElement.style.borderColor = 'red';
                flagCompanyNumber = false;
            } else {
                companyNumberElement.style.border = 'none';
                flagCompanyNumber = true;
            }
            if (flagCompanyNumber && flagUsername && flagEmail && flagPassword && flagConfirmPassword) {
                validElement.style.display = 'block';
            } else {
                validElement.style.display = 'none';
            }
        } else {
            if (flagUsername && flagEmail && flagPassword && flagConfirmPassword) {
                validElement.style.display = 'block';
            } else {
                validElement.style.display = 'none';
            }
        }
    });
}