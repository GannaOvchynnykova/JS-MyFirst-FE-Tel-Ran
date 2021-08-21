const contactsBook = [
    {
        id: '1',
        name: 'John Doe',
        tel: '0967867446',
        email: 'john@mail.com',
        city: 'Tel Aviv',
        comment: 'Best friend' 
    },
    {
        id: '2',
        name: 'Jack Sparrow',
        tel: '0987654321',
        email: 'kohn@mail.com',
        city: 'Madrid',
        comment: 'Best friend'
    },
    {
        id: '3',
        name: 'Tony Stark',
        tel: '0975634567',
        email: 'yohn@mail.com',
        city: 'Rom',
        comment: 'Best friend'
    },
];

const left = document.querySelector('#left'),
right = document.querySelector('#right');

contactsBook.forEach((element, index) => {
    const div = document.createElement('div');
    div.id = 'contact_' + element.id;
    div.className = 'contact';
    div.innerHTML = `<h3>${element.name}</h3>
            <p>${element.tel}</p>
            <i class="fas fa-trash"></i>
            <hr>`;
            left.append(div);
});

const contacts = left.querySelectorAll('.contact');

for (contact of contacts){
    contact.onclick = (event) => {
        right.innerHTML ='';
        const id = +event.currentTarget.id.split('_')[1];
        const element = contactsBook.find((el) => el.id == id);
        const contactDetails = document.createElement('div');
        contactDetails.className = 'contactDetail';
        contactDetails.innerHTML = `<h3>${element.name}</h3>
            <p>${element.tel}</p>
            <p>${element.email}</p>
            <p>${element.city}</p>
            <span>${element.comment}</span>`;
            right.appendChild(contactDetails);
    }
}
