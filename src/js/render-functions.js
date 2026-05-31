import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = null;

const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more-btn');

function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
          </a>
          <div class="info-container">
            <p class="info-item"><b>Likes</b> <br>${likes}</p>
            <p class="info-item"><b>Views</b> <br>${views}</p>
            <p class="info-item"><b>Comments</b> <br>${comments}</p>
            <p class="info-item"><b>Downloads</b> <br>${downloads}</p>
          </div>
        </li>
      `
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
  }
}

function clearGallery() {
  galleryContainer.innerHTML = '';
}

function showLoader() {
  if (loader) loader.classList.remove('is-hidden');
}

function hideLoader() {
  if (loader) loader.classList.add('is-hidden');
}

function showLoadMoreButton() {
  if (loadMoreBtn) loadMoreBtn.classList.remove('is-hidden');
}

function hideLoadMoreButton() {
  if (loadMoreBtn) loadMoreBtn.classList.add('is-hidden');
}

export {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
};
