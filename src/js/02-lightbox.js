import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGallery(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', findImgAlt);

function findImgAlt(e) {
  return console.log(e.target.alt)
}

let lightbox = new SimpleLightbox('.gallery a', { 
  captionsData: 'alt',  
  captionType: "attr",
  captionDelay: 250
});

lightbox.on("show.simplelightbox");

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


