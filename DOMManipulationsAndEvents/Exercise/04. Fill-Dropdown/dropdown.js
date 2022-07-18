function addItem() {
    let textElement = document.getElementById('newItemText');
    let valueElement = document.getElementById('newItemValue');
    let menuElement = document.getElementById('menu');
    let option = document.createElement('option');
    if (textElement.value !== '' && valueElement.value !== '') {
        option.textContent = textElement.value;
        option.value = valueElement.value;
        menuElement.appendChild(option);
        textElement.value = '';
        valueElement.value = '';
    }
}