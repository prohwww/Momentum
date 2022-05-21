const images = [
    "cat.jpg",
    "nature.jpg",
    "tree.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// html의 element 생성
// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;
// document.body.appendChild(bgImage);

const body = document.querySelector("body");
body.style.backgroundImage = `url(img/${chosenImage})`;
body.style.backgroundSize = "100%";
