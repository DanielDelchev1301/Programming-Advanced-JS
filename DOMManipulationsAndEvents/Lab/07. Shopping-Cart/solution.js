function solve() {
    let buttonElements = document.querySelectorAll('.add-product');
    for (let button of buttonElements) {
        button.addEventListener('click', (e) => {
            let wholeProductElement = button.parentElement.parentElement;
            console.log(wholeProductElement.childNodes);
        });
    }
}