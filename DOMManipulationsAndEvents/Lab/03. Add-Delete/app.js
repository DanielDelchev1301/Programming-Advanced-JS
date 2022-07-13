function addItem() {
    let parentElement = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');
    
    let createLiElement = document.createElement('li');
    createLiElement.textContent = inputElement.value;
    
    let createLinkElement = document.createElement('a');
    createLinkElement.href = '#';
    createLinkElement.textContent = '[Delete]';
    createLinkElement.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();
    });
    createLiElement.appendChild(createLinkElement);
    parentElement.appendChild(createLiElement);
}