function focused() {
    let inputElements = document.querySelectorAll('div input');
    for (let input of inputElements) {
        let parent = input.parentElement;
        input.addEventListener('focus', (e) => {
            parent.className = 'focused';
        });
        input.addEventListener('blur', (e) => {
            parent.className = '';
        })
    }
}