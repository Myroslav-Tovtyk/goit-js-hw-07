import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainerRef = document.querySelector(".gallery");

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class = "gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>
        `
    }).join('');
};

galleryContainerRef.insertAdjacentHTML('beforeend', createGallery(galleryItems));

function onGalleryContainerClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  };
  const images = e.target.dataset.source;
  
  const instance = basicLightbox.create(
    `
    <img src="${images}" width="800" height="600">
    `
  );
  instance.show();
};

galleryContainerRef.addEventListener("click", onGalleryContainerClick);


