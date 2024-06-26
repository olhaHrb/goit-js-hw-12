import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { fetchImg } from "./js/pixabay-api"; 
import { renderImageCard } from "./js/render-functions";

const loader = document.querySelector('.loader');
const form = document.querySelector(".form");
const btnLoad = document.querySelector('.btn_load');
const galleryContainer = document.querySelector(".gallery");
let searchQuery = "";
let pageValue = 1;
let totalRender = 0;

form.addEventListener("submit", onFormSubmit);
btnLoad.addEventListener("click", onBtnLoad)

async function onFormSubmit(event) {
  event.preventDefault();
  loader.classList.remove('is-hidden');
  galleryContainer.innerHTML = "";

  searchQuery = event.target.elements.searchInput.value.trim();

  if (searchQuery === "") {
    iziToast.info({
        message: (`Enter search query.`),
      });
    loader.classList.add('is-hidden');
    btnLoad.classList.add('is-hidden');
    return;
  };
  
  pageValue = 1;
  try {
    const { hits, totalHits } = await fetchImg(searchQuery, pageValue);
    totalRender = hits.length;
    
    // перевірка на порожній масив
    if (hits.length === 0) {
      iziToast.error({
        message: (`Sorry, there are no images matching your search query. Please try again!`),
      });
      btnLoad.classList.add('is-hidden');
      return;
    };

    renderImageCard(hits);
    btnLoad.classList.remove('is-hidden');
  
    // перевірка totalHits
    if (totalRender === totalHits) {
      btnLoad.classList.add('is-hidden');
    }

  } catch (error) {
    onFetchError(error);
  } finally {
    form.reset();
    loader.classList.add('is-hidden');
  };
};

function onFetchError(error) {
  alert(error);
}

async function onBtnLoad(event) {
  loader.classList.remove('is-hidden');

  pageValue += 1;
  
  try {
    const { hits, totalHits } = await fetchImg(searchQuery, pageValue);
    totalRender += hits.length;
    renderImageCard(hits);
    const galleryItem = document.querySelector('.gallery-item');
    const rect = galleryItem.getBoundingClientRect();
    window.scrollBy({
      top: rect.height * 2,
      behavior: "smooth",
    });
    // перевірка totalHits
    if (totalRender === totalHits) {
      btnLoad.classList.add('is-hidden');
      iziToast.info({
        message: (`We're sorry, but you've reached the end of search results.`),
      });
      
    };
  } catch (error) {
    onFetchError(error);
  }
    loader.classList.add('is-hidden');
};


