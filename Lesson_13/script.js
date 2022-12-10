const instruments = [
  {
    id: 1,
    img: 'https://static.dnipro-m.ua/cache/products/1754/catalog_origin_141546.jpg',
    name: 'Молоток',
    price: 150,
  },
  {
    id: 2,
    img: 'https://static.dnipro-m.ua/cache/products/5098/catalog_origin_195568.jpg',
    name: 'Перфоратор',
    price: 3000,
  },
  {
    id: 3,
    img: 'https://static.dnipro-m.ua/cache/products/2023/catalog_origin_200763.jpg',
    name: 'Рівень',
    price: 2000,
  },
];

const list = document.querySelector('.list');
const markup = instruments.reduce(
  (acc, { id, img, name, price }) =>
    acc +
    `<li data-product-id="${id}">
    <img src="${img}" alt="${name}" width = "150px" >
    <h2>Назва товару</h2>
    <p>Ціна ${price}</p>
     <div>
                    <button type="button" class="js-cart">Add to cart</button>
                    <button type="button" class="js-favorite">Add to favorite</button>
                </div>
    </li>`,
  ''
);
list.insertAdjacentHTML('beforeend', markup);
console.log(markup);
