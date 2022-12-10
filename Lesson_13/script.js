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
const basket = [];
const favorite = [];
const markup = instruments.reduce(
  (acc, { id, img, name, price }) =>
    acc +
    `<li data-product-id="${id}" class = "js-item">
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
list.addEventListener('click', onClick);

function onClick(evt) {
  if (!evt.target.classList.contains('js-cart') && !evt.target.classList.contains('js-favorite')) {
    return;
  }

  if (evt.target.classList.contains('js-cart')) {
    // const currentElement = evt.target.closest('.js-item');
    // const productId = Number(currentElement.dataset.productId);
    // const product = instruments.find(({ id }) => id === productId);
    const product = findProduct(evt.target);
    basket.push(product);
    console.log(basket);
  } else if (evt.target.classList.contains('js-favorite')) {
    // const currentElement = evt.target.closest('.js-item');
    // const productId = Number(currentElement.dataset.productId);
    // const product = instruments.find(({ id }) => id === productId);
    const product = { ...findProduct(evt.target) };
    const haveProduct = favorite.find(({ id }) => id === product.id);
    if (haveProduct) {
      haveProduct.qty += 1;
    } else {
      product.qty = 1;
      favorite.push(product);
    }

    console.log(favorite);
  }
}

/**
 *
 * @param {Object} elem
 * @returns {Object}
 */
function findProduct(elem) {
  const currentElement = elem.closest('.js-item');
  const productId = Number(currentElement.dataset.productId);
  const product = instruments.find(({ id }) => id === productId);
  return product;
}
