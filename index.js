const title = document.querySelector(".opening-title");
const openingBtn = document.querySelector(".opening-btn");
const leftCover = document.querySelector(".cover-left");
const rightCover = document.querySelector(".cover-right");
const btn = document.querySelector(".btn");
const container = document.querySelector(".nav-container");
const navbar = document.querySelector("#navbar");
const content = document.querySelector(".content");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const popup = document.querySelector(".popup");

//////////////
///Opening
openingBtn.addEventListener("click", () => {
  title.style.transform = "translate(-50%, -290%)";
  rightCover.style = "clip-path: polygon(100% 0, 100% 0, 100% 100%)";
  leftCover.style = "clip-path: polygon(0 0, 0% 100%, 0 100%)";
  btn.style.display = "none";
  setTimeout(() => {
    container.classList.remove("hidden");
    content.classList.remove("hidden");
  }, 500);
});

//////////////
///Modal
modal.addEventListener("click", () => {
  document.body.style.overflow = "hidden";
  visible();
});
close.addEventListener("click", () => {
  document.body.style.overflow = "auto";
  hide();
});

//////////////
///Close and Open
const hide = () => {
  overlay.classList.add("hidden");
  popup.classList.add("hidden");
};
const visible = () => {
  overlay.classList.remove("hidden");
  popup.classList.remove("hidden");
};
