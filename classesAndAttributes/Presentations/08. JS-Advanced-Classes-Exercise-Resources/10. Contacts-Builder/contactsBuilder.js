class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.online = false;
    }
    render(id) {
        let domElement = document.getElementById(id);
        let htmlStructure = `<article>
                                <div class="title">${this.firstName} ${this.lastName}<button>&#8505;</button></div>
                                <div class="info">
                                    <span>&phone; ${this.phone}</span>
                                    <span>&#9993; ${this.email}</span>
                                </div>
                            </article>`;
    }
}
let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);  