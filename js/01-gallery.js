import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
       <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
       </a>
       </div>`
  )
  .join("");

const galleryListRef = document.querySelector(".gallery");
galleryListRef.insertAdjacentHTML("beforeend", markup);

galleryListRef.addEventListener("click", onOpenModal);
window.addEventListener("keydown", onCloseModal);

let modal;

function onOpenModal(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const imageOriginalLink = event.target.dataset.source;
  modal = basicLightbox.create(`<img width="1400" height="900" src="${imageOriginalLink}"> `);
  modal.show();
}

function onCloseModal(event) {
  if (event.code === "Escape") {
    modal?.close();
  }
}

