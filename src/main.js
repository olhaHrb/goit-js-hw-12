import { fetchImg } from "./js/pixabay-api"; 
import { renderImageCard } from "./js/render-functions";

const loader = document.querySelector('.loader');
const formEach = document.querySelector(".form");
const btnLoad = document.querySelector('.btn_load');
let searchValue = "";
let pageValue;
export const PAGE = pageValue;

formEach.addEventListener("submit", onSearch);
btnLoad.addEventListener("click", onLoad)

function onSearch(event) {
  event.preventDefault();
  loader.classList.remove('is-hidden');
  pageValue = 1;
  const form = event.currentTarget;
  const searchQuery = form.elements.searchInput.value.trim();

  if (searchQuery === "") { 
    loader.classList.add('is-hidden');
    return;
  };  
  
  searchValue = searchQuery;

  fetchImg(searchQuery)
    .then(image => {
      renderImageCard(image);
    }) 
    .catch (error => {
      onFetchError(error);
    })
    .finally(() => {
      form.reset();
      loader.classList.add('is-hidden');
      btnLoad.classList.remove('is-hidden');
    });
};

function onFetchError(error) {
  alert(error);
}

function onLoad(event) {
  pageValue = pageValue + 1;
  fetchImg(searchValue)
    .then(image => {
      renderImageCard(image);
    }) 
    .catch (error => {
      onFetchError(error);
    })
    .finally(() => {
      
    });
};


