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

function onOpenModal(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const imageOriginalLink = event.target.dataset.source;
  const modal = basicLightbox.create(`<img width="1400" height="900" src="${imageOriginalLink}"> `,
    {
      onShow: () => document.addEventListener("keydown", onCloseModal),
      onClose: () => document.removeEventListener("keydown", onCloseModal),
    }
  );
  modal.show();


  function onCloseModal(event) {
    if (event.key === "Escape") {
      modal.close();
    }
  }
}
