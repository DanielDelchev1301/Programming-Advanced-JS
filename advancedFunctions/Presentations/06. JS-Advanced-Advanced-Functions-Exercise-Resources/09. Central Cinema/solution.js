function solve() {
    let nameElement = document.querySelector('input[placeholder="Name"]');
    let hallElement = document.querySelector('input[placeholder="Hall"]');
    let ticketPriceElement = document.querySelector('input[placeholder="Ticket Price"]');
    let onScreenBtn = document.querySelector('#container button');
    let moviesUlElement = document.querySelector('#movies ul');

    onScreenBtn.addEventListener('click', (e) => {
        let liElement = document.createElement('li');
        let span = document.createElement('span');
        let strongHall = document.createElement('strong');
        span.textContent = nameElement.value;
        strongHall.textContent = hallElement.value;
        liElement.appendChild(span);
        liElement.appendChild(strongHall);
        let div = document.createElement('div');
        let strong = document.createElement('strong');
        let input = document.createElement('input');
        let button = document.createElement('button');
        strong.textContent = Number(ticketPriceElement.value).toFixed(2);
        input.placeholder = 'Tickets Sold';
        button.textContent = 'Archive';
        div.appendChild(strong);
        div.appendChild(input);
        div.appendChild(button);
        liElement.appendChild(div);
        moviesUlElement.appendChild(liElement);
        nameElement.value = '';
        hallElement.value = '';
        ticketPriceElement.value = '';
    });
}