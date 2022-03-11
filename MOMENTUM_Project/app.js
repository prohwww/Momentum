const h1 = document.querySelector("div.hello:first-child h1");
// console.dir(h1);

function superEventHandler() {
  const clickedClass = "clicked";
  h1.classList.toggle(clickedClass);
}

h1.addEventListener("click", superEventHandler);
