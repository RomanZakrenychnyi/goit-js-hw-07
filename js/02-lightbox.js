import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');
const cardGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href=${original}>
            <img class="gallery__image"
            src=${preview} 
            alt=${description} />
            </a>`;
  })
  .join('');

galleryRef.insertAdjacentHTML('afterbegin', cardGallery);

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250'
});