function extractText() {
    let text = document.querySelectorAll('#items li');
    let result = [];
    let textArray = Array.from(text);
    textArray.forEach(x => {
        result.push(x.textContent);
    });
    let textArea = document.getElementById('result');
    result.forEach(x => {
        textArea.textContent += `${x}       `;
    });
}