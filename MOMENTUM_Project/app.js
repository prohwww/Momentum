const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);

function superEventHandler(eventName) {
  switch (eventName) {
    case "mouseenter":
    return() => {
      h1.innerText = "Mouse is here!";
      h1.style.color = "red";}
    case "mouseleave":
    return() => {
      h1.innerText = "Mouse is gone!";
      h1.style.color = "blue";}
    case "resize":
    return() => {
      h1.innerText = "You just resized";
      h1.style.color = "purple";}
    case "contextmenu":
        return() => {
      h1.innerText = "You was a right click";
      h1.style.color = "orange";}
  }
}

h1.addEventListener("mouseenter", superEventHandler("mouseenter"));
h1.addEventListener("mouseleave", superEventHandler("mouseleave"));

window.addEventListener("resize", superEventHandler("resize"));
window.addEventListener("contextmenu", superEventHandler("contextmenu"));
