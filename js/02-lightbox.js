import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

//              ADD GALLERY


const galleryRef = document.querySelector('.gallery');
const cardGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
               <a class = "gallery__link" href = ${original}/>
               <img class = "gallery__image"
               src = ${preview}
               data-source = ${original}
               alt = ${description} />
               </a>
            </div>`;
  })
  .join('');

galleryRef.insertAdjacentHTML('afterbegin', cardGallery);

//                 ADD LIBRARY SimpleLightbox

galleryRef.addEventListener('click', onImageClick)

function onImageClick(event) {
    event.preventDefault()

    if (event.target.nodeName !== 'IMG') {
        return;
    }
}