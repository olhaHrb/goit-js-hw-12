import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionsDelay: 250
});

const galleryContainer = document.querySelector(".gallery");


export function renderImageCard(images) {
    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
      return (`
        <li class="gallery-item">
            <a class="gallery-link" href=${largeImageURL}>
                <img class="gallery-image" src=${webformatURL} alt=${tags} />
            </a>
            <ul class="gallery-caption">
              <li class="caption-item">
                <h3 class="caption-title">Likes</h3>
                <p class="caption-value">${likes}</p>
              </li>
              <li class="caption-item">
                <h3 class="caption-title">Views</h3>
                <p class="caption-value">${views}</p>
              </li>
              <li class="caption-item">
                <h3 class="caption-title">Comments</h3>
                <p class="caption-value">${comments}</p>
              </li>
              <li class="caption-item">
                <h3 class="caption-title">Downloads</h3>
                <p class="caption-value">${downloads}</p>
              </li>
            </ul>
        </li>`)
    }).join('');
      galleryContainer.insertAdjacentHTML('beforeend', markup);
      lightbox.refresh();
};
  