import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainerRef = document.querySelector(".gallery");

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `        
        <a class="gallery__item" href="${original}">
          <img class="gallery__image"
          src="${preview}"
          alt="${description}" />
        </a>
        `
    }).join('');
};

galleryContainerRef.insertAdjacentHTML('beforeend', createGallery(galleryItems));

// galleryContainerRef.addEventListener('click', findImgAlt);

// function findImgAlt(e) {
//   e.preventDefault();
// }

let lightbox = new SimpleLightbox('.gallery a', { 
  captionsData: 'alt',  
  captionType: "attr",
  captionDelay: 250
});

lightbox.on("show.simplelightbox");




