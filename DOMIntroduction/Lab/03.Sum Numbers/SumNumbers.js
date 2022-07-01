function calc() {
    let firstNumberElement = document.getElementById('num1');
    let secondNumberElement = document.getElementById('num2');

    firstNumberElement = Number(firstNumberElement.value);
    secondNumberElement = Number(secondNumberElement.value);
    
    let sum  = firstNumberElement + secondNumberElement;

    let resultElement = document.getElementById('sum');
    resultElement.value = sum;
}
