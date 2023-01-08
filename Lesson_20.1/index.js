'use strict';
// const API_KEY = '4330ebfabc654a6992c2aa792f3173a3';
// const BASE_URL = 'https://newsapi.org/v2';
// const options = {
//   headers: {
//     Authorization: API_KEY,
//   },
// };

// import onSearch from './onSearch';
import NewsApiService from './news-service';
import createMarkup from './createMarkup';

console.log(NewsApiService);
const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles-container'),
  loadMoreBtn: document.querySelector('[data-action="load-more]'),
};

const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(evt) {
  evt.preventDefault();
  newsApiService.query = evt.currentTarget.elements.query.value;
  newsApiService.resetPage();
  newsApiService.fetchArticles().then(articles => console.log(articles);)
}
function onLoadMore() {
  newsApiService.fetchArticles();
}
