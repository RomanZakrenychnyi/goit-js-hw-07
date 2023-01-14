import { galleryItems } from './gallery-items.js';

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

//                FUNCTION ON CLICK

galleryRef.addEventListener('click', onClickImage);

function onClickImage(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }
    
    const instance = basicLightbox.create(`
    <img src='${event.target.dataset.source}'>
`);
    instance.show();
    
    galleryRef.addEventListener('keydown', event => {
        if (event.code === 'Escape') {
            instance.close();
        }
    })
}
