window.addEventListener("wheel", (event) => {
  const item = document.querySelector("main");
  const viewportWidth = window.innerWidth;
  if (event.deltaY > 0) item.scrollLeft += viewportWidth;
  else item.scrollLeft -= viewportWidth;
});
