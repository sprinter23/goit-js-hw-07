import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
       <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
       </a>`
  )
  .join("");

const galleryListRef = document.querySelector(".gallery");
galleryListRef.insertAdjacentHTML("beforeend", markup);


galleryListRef.addEventListener("click", onOpenSlider);

function onOpenSlider(event) {
  event.preventDefault();
}

let gallerySlider = new SimpleLightbox(".gallery .gallery__item", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
gallerySlider.on("shown.simplelightbox");