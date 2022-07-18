function lockedProfile() {
    let buttons = document.querySelectorAll('button');
    for (let button of buttons) {
        button.addEventListener('click', clickBtn);
        function clickBtn(event) {
            let parentElement = event.target.parentElement;
            let hiddenInfoElement = parentElement.querySelector('div div');
            let unlockBtn = parentElement.querySelector('input[value="unlock"]');
            let isActive = unlockBtn.checked;
            if (isActive && button.textContent == 'Show more') {
                hiddenInfoElement.style.display = 'block';
                button.textContent = 'Hide it';
            } else if (isActive && button.textContent == 'Hide it') {
                hiddenInfoElement.style.display = 'none';
                button.textContent = 'Show more';
            }
        }
    }
}