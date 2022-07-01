function sumTable() {
    let costElements = document.querySelectorAll('tr td:nth-of-type(2n)');
    let costElementsArr = Array.from(costElements);
    let resultElement = costElementsArr.pop();
    let sum = 0;
    costElementsArr.forEach(x => {
        sum += Number(x.textContent);
    });
    resultElement.textContent = sum;
}