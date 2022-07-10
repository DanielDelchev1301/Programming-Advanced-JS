function deleteByEmail() {
    let resultElement = document.getElementById('result');
    let inputElement = document.querySelector('input[name="email"]');
    let emailListElements = document.querySelectorAll('tr td:nth-of-type(2)');
    let emailsArray = Array.from(emailListElements);
    let targetElement = emailsArray.find(x => x.textContent == inputElement.value);
    if (targetElement) {
        targetElement.parentNode.remove();
        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.';
    }
}