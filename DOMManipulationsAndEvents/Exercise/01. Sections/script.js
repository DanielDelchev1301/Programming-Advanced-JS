function create(input) {
    let parent = document.getElementById('content');
    for (let i = 0; i < input.length; i++) {
        let div = document.createElement('div');
        let p = document.createElement('p');
        p.textContent = input[i];
        p.style.display = 'none';
        div.addEventListener('click', () => {
            p.style.display = 'block';
        });
        div.appendChild(p);
        parent.appendChild(div);
    }
}