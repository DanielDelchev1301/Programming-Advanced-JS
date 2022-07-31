function validate() {
    let inputElement = document.getElementById('email');
    let pattern = /[a-z]+@[a-z]+\.[a-z]+/;
    inputElement.addEventListener('change', (e) => {
        let match = pattern.exec(inputElement.value);
        if(match == null) {
            e.currentTarget.className = 'error';
        } else {
            e.currentTarget.className = '';
        }
    });
}