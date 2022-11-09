function tickets(array, criteria) {
    let tickets = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    array.forEach(x => {
        let [desination, price, status] = x.split('|');
        let currentTicket = new Ticket(desination, Number(price), status);
        tickets.push(currentTicket);
    });
    let result;
    if (criteria != 'price') {
        result = tickets.sort((a, b) => a[criteria].localeCompare(b[criteria]));
    } else {
        result = tickets.sort((a, b) => a[criteria] - b[criteria]);
    }
    return result;
}
tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|available',
    'Philadelphia|132.20|departed',
    'Chicago|140.20|available',
    'Dallas|144.60|sold',
    'New York City|206.20|sold',
    'New York City|240.20|departed',
    'New York City|305.20|departed'],
    'price');