// https://bundlephobia.com/

// 1 Підключення
// 2 Ініціалізація екземпляру класу (обов'язково дивитись приклади в докі)
// 3 Розглянути методи які присутні на нашому екземплярі класу

// const cats = [
//   'https://i.ytimg.com/vi/iKA6ZXpGcGQ/maxresdefault.jpg',
//   'https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg',
//   'https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg',
//   'https://i.guim.co.uk/img/media/941093798b256e5d1aa6246a08824bc86f62a31f/0_0_5000_3000/master/5000.jpg?width=1300&quality=85&fit=max&s=ea672fb16df8634901283252059baaf8',
//   'https://nypost.com/wp-content/uploads/sites/2/2022/06/reddit-cats-judging-looks-00.jpg?quality=75&strip=all',
//   'https://gdb.voanews.com/09690000-0a00-0242-5408-08da76ebde16_cx0_cy3_cw99_w1200_r1.jpg',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCK8yYjQ6igjrAJyCyXUwV6U7RDkLVc4FVnQ&usqp=CAU',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU',
//   'https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU',
//   'https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU',
//   'https://assets.globalwildlife.org/m/3b6039a74fd067ea/webimage-Tigrinia.jpg',
//   'https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg',
//   'https://www.nhm.ac.uk/content/dam/nhmwww/discover/wild-cats/margay-two-column.jpg.thumb.768.768.jpg',
//   'https://irs.www.warnerbros.com/gallery-v2-jpeg/cats__dogs_photo_12-14571309.jpg',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyGk9Ds3bdd4B404EcoMDrVUKnU5u9KABOg&usqp=CAU',
// ];
// const list = document.querySelector('.js-list');

// const markup = cats.map(url => `<li><img src="${url}" alt="cat"></li>`);
// const markup = cats.reduce(
//   (acc, url) =>
//     acc +
//     `<li>
// <img src="${url}" alt="cat" loading="lazy" width="300">
// </li>`,
//   ''
// );
// list.insertAdjacentHTML('beforeend', markup);

// let counter = 0;
// document.addEventListener('scroll', _.throttle(onScroll, 1500, { leading: true, trailing: false }));

// function onScroll(evt) {
//   counter += 1;
//   console.log(evt);
//   console.log(counter);
// }
// const input = document.querySelector('.js-query');
// input.addEventListener(
//   'input',
//   _.debounce(onInput, 300, { leading: true, trailing: false, maxWait: 500 })
// );

// function onInput(evt) {
//   console.log(evt.target.value);
// }

////////////////////////////////////////////////////////////////////////////////////////

// const yura = {
//   name: 'Yura',
//   age: 23,
//   showInfo() {
//     console.log(this.name, this.age);
//   },
// };
// const andrii = {
//   name: 'Andrii',
//   age: 23,
// };
// yura.showInfo.call(yura);

////////////////////////////////////////////////////////////////////////

// const disease = [
//   { name: 'COVID-19', href: 'https://en.wikipedia.org/wiki/COVID-19' },
//   { name: 'Plague', href: 'https://en.wikipedia.org/wiki/Plague_(disease)' },
//   { name: 'Ebola', href: 'https://en.wikipedia.org/wiki/Ebola' },
//   { name: 'Monkeypox', href: 'https://en.wikipedia.org/wiki/Monkeypox' },
// ];

// const rootRef = document.querySelector('#root');
// const btnRef = document.querySelector('#menu');

// function createLi({ name, href }) {
//   const li = document.createElement('li');
//   const a = document.createElement('a');
//   a.setAttribute('href', href);
//   a.setAttribute('target', '_blank');
//   a.textContent = name;
//   li.append(a);
//   return li;
// }

// const markup = disease.map(item => {
// return `<li>${item}</li>`;
//   return createLi(item);
// });

// const ulRef = document.createElement('ul');
// ulRef.classList.add('hide');
// ulRef.append(...markup);
// rootRef.append(ulRef);

// btnRef.addEventListener('click', evt => {
//   ulRef.classList.toggle('hide');
//   if (ulRef.classList.contains('hide')) {
//     btnRef.textContent = 'Show';
//     return;
//   }
//   return (btnRef.textContent = 'Hide');
// });

/////////////////////////////////////Переписую на класи////////////////////////////////////

class Menu {
  constructor(disease) {
    this.disease = disease;
    this.rootRef = document.querySelector('#root');
    this.btnRef = document.querySelector('#menu');
    this.ulRef = document.createElement('ul');
  }

  createLi({ name, href }) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.setAttribute('href', href);
    a.setAttribute('target', '_blank');
    a.textContent = name;
    li.append(a);
    return li;
  }

  createMarkup() {
    const markup = this.disease.map(item => {
      // return `<li>${item}</li>`;
      return this.createLi(item);
    });
    // const ulRef = document.createElement('ul');
    this.ulRef.classList.add('hide');
    this.ulRef.append(...markup);
    this.rootRef.append(this.ulRef);
  }

  addLidteners() {
    this.btnRef.addEventListener('click', evt => {
      this.ulRef.classList.toggle('hide');
      if (this.ulRef.classList.contains('hide')) {
        this.btnRef.textContent = 'Show';
        return;
      }
      return (this.btnRef.textContent = 'Hide');
    });
  }
  init() {
    this.addLidteners();
    this.createMarkup();
  }
}
const disease = [
  { name: 'COVID-19', href: 'https://en.wikipedia.org/wiki/COVID-19' },
  { name: 'Plague', href: 'https://en.wikipedia.org/wiki/Plague_(disease)' },
  { name: 'Ebola', href: 'https://en.wikipedia.org/wiki/Ebola' },
  { name: 'Monkeypox', href: 'https://en.wikipedia.org/wiki/Monkeypox' },
];

const mainMenu = new Menu(disease);
mainMenu.init();
