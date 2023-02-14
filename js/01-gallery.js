import { galleryItems } from './gallery-items.js';

const colletionEl = document.querySelector('.gallery');

const creatColectionEl = galleryItems.map(({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`).join('');

colletionEl.insertAdjacentHTML('afterbegin', creatColectionEl); 

const handlerClickImg = event => {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }

    const instance = basicLightbox.create(`
    <img src=${event.target.dataset.source}>`)

    instance.show()
    
    
    const removeCloseModalBtn = event => {
        if (event.code === 'Escape') {
            instance.close()
            document.removeEventListener("keydown", removeCloseModalBtn)
        }
        console.log('key');
    }

    document.addEventListener("keydown", removeCloseModalBtn)

}

colletionEl.addEventListener('click', handlerClickImg);