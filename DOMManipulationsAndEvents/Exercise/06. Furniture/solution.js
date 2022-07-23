function solve() {
    let inputArray = document.querySelector('textarea[rows="5"]').textContent;
    let buttonElement = document.querySelector('button');
    buttonElement.addEventListener('click', () => {
        console.log(inputArray);
    })
}