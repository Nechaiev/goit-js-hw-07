import { galleryItems } from './gallery-items.js';

console.log(galleryItems);
const gallery = document.querySelector('.gallery')
const makeEl = (classes = "", child = null, tag = "div") => {
  const nodeEl = document.createElement(tag);
  nodeEl.className = classes;
  if (child) {
    nodeEl.append(child);
  }
  return nodeEl;
}
const openImg = (e, src) => {
  e.preventDefault();
  const keydownHandler = e => {
    if (e.key === 'Escape') {
      instance.close()
      gallery.removeEventListener('keydown', keydownHandler)
    }
  }
  const instance = basicLightbox.create(`<img src="${src}" width="800" height="600">`);
  gallery.addEventListener('keydown', keydownHandler)
  instance.show()
}
galleryItems.forEach(({ preview, original, description }) => {
  const galleryImage = makeEl("gallery__image", null, "img");
  galleryImage.src = preview;
  galleryImage.alt = description;
  const galleryLink = makeEl('gallery__link', galleryImage, "a");
  galleryLink.href = original;
  galleryImage.addEventListener("click",(e) => openImg(e, original))
  gallery.append(makeEl('gallery__item', galleryLink))
}) 