function addItem() {
    let parentElement = document.getElementById('items');
    let input = document.getElementById('newItemText').value;
    let createLiElement = document.createElement('li');
    createLiElement.textContent = input;
    parentElement.appendChild(createLiElement);
}