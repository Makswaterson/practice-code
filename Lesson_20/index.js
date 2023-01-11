const refs = {
  form: document.querySelector('.js-search-form'),
  list: document.querySelector('.js-gallery'),
  loadMoreBtn: document.querySelector('.js-more'),
};
console.log(refs.loadMoreBtn);
class UnsplashApi {
  #page = 1;
  #query = '';
  #totalPages = 0;
  #per_page = 12;
  getPhotos() {
    const url = `https://api.unsplash.com/search/photos?page=${this.#page}&query=${
      this.#query
    }&client_id=LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc&per_page=${
      this.#per_page
    }&color=orange&orientation=portrait`;
    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }
  incrementPage() {
    this.#page = +1;
  }
  calculateTotalPages(total) {
    this.#totalPages = Math.ceil(total / this.#per_page);
  }
  set query(newQuery) {
    this.#query = newQuery;
  }
  get query() {
    return this.#query;
  }

  get isShowLoadMore() {
    return this.#page < this.#totalPages;
  }
  resetPage() {
    this.#page = 1;
  }
}

const unsplash = new UnsplashApi();

refs.form.addEventListener('submit', handleSubmit);
refs.loadMoreBtn.addEventListener('click', loadMore);

function handleSubmit(evt) {
  evt.preventDefault();
  const {
    elements: { query },
  } = evt.currentTarget;
  const searchQuery = query.value.trim().toLowerCase();
  if (!searchQuery) {
    return;
  }
  unsplash.query = searchQuery;
  clearPage();

  unsplash
    .getPhotos()
    .then(({ results, total }) => {
      if (results.length === 0) {
        console.log('За вашим запитом картинки не знайдемо');
        return;
      }
      const markup = createMarkup(results);
      refs.list.insertAdjacentHTML('beforeend', markup);
      unsplash.calculateTotalPages(total);
      if (unsplash.isShowLoadMore) {
        refs.loadMoreBtn.classList.remove('is-hidden');
      }
    })
    .catch(error => console.log(error.message, 'Щось виникло не так!'));
  clearPage();
}

function createMarkup(photos) {
  return photos
    .map(({ urls, alt_description }) => {
      return /*html*/ `<li class="gallery__item">
    <img src="${urls.small}" alt="${alt_description}" class="gallery-img">
</li>`;
    })
    .join();
}
function loadMore() {
  unsplash.incrementPage();
  if (!unsplash.isShowLoadMore) {
    refs.loadMoreBtn.classList.add('is-hidden');
  }
  unsplash.getPhotos().then(({ results }) => {
    const markup = createMarkup(results);
    refs.list.insertAdjacentHTML('beforeend', markup).catch(error => {
      error.message, 'Щось виникло не так!';
    });
    clearPage();
  });
}
function clearPage() {
  unsplash.resetPage();
  refs.list.innerHTML = '';
  refs.loadMoreBtn.classList.add('is-hidden');
}
