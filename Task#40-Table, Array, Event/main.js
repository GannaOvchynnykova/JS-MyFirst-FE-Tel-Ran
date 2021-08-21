const productCards = [
  {
    picture: './images/salad-pngrepo-com.png',
    title: 'Ceaser salad',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing elit',
    price: 6,
    quantity: 1
  },
  {
    picture: './images/soup-pngrepo-com.png',
    title: 'Tomato soup',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing elit',
    price: 5,
    quantity: 1
  },
  {
    picture: './images/steak-pngrepo-com.png',
    title: 'Steak',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing elit',
    price: 12,
    quantity: 1
  },
  {
    picture: './images/orange-juice-juice-pngrepo-com.png',
    title: 'Orange juice',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing elit',
    price: 3,
    quantity: 1
  }
];

console.log(productCards);

const cartBtn = document.querySelector('#cartBtn');
const homeBtn = document.querySelector('#homeBtn');
const addBtn = document.querySelectorAll('button');
const products = document.querySelector('.products');

renderCards(productCards);

function renderCards(item) {
  products.innerHTML = '';
  for (let i = 0; i < productCards.length; i++) {
    const card = document.createElement('div');
    card.className = 'card'
    card.innerHTML = `<img src=${item[i].picture} alt=${item[i].title} />
          <h2>${item[i].title}</h2>
          <br>
          <p>
            ${item[i].description}
          </p> <br>
          <h3>Price: € ${item[i].price}</h3>
          <button>Add to card</button>`;
    products.appendChild(card);
  }
}

function renderTable(item) {
  products.innerHTML = '';
  const table = document.createElement('table');
  table.className = 'table';
  table.innerHTML = `<thead>
            <tr>
              <th>TITLE</th>
              <th>PRICE</th>
              <th>COUNT</th>
              <th>TOTAL</th>
            </tr>
          </thead>`;
  for (let i = 0; i < productCards.length; i++) {
    const tr = document.createElement('tr')
    tr.innerHTML = `
              <td>${item[i].title}</td>
              <td>€ ${item[i].price}</td>
              <td>${item[i].quantity}</td>
              <td>€ ${item[i].price * item[i].quantity}</td>`;
    table.append(tr);
  }
  products.append(table);

  const total = document.createElement('div');
  const h2 = document.createElement('h2');
  total.append(h2);
  h2.innerHTML = `Total: € ${productCards.reduce((total, item) => total += item.quantity * item.price, 0)}`;
  total.style.marginLeft = 'auto';
  products.append(total);
}


const changeBtn = function (event) {
  let liHome = document.querySelector('.homeNav'),
    liCart = document.querySelector('.cartNav');
  if (event.target === homeBtn) {
    liHome.style.backgroundColor = 'green';
    liCart.style.backgroundColor = 'black';
    renderCards(productCards);
  }
  if (event.target === cartBtn) {
    liCart.style.backgroundColor = 'green';
    liHome.style.backgroundColor = 'black';
    renderTable(productCards);

  }
}

homeBtn.addEventListener('click', changeBtn, false);
cartBtn.addEventListener('click', changeBtn, false);