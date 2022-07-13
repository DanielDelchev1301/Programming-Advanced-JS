function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient-box');
    let resultElement = document.getElementById('result');
    gradientElement.addEventListener('mousemove', (e) => {
        let power = e.offsetX / (e.target.clientWidth - 1);
        let percent = Math.trunc(power * 100);
        resultElement.textContent = `${percent}%`;
    });
    gradientElement.addEventListener('mouseout', () => {
        resultElement.textContent = '';
    });
}