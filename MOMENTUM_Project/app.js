// const loginFrom = document.querySelector("#login-form");
// const loginInput = loginFrom.querySelector("input");
// const loginButton = loginFrom.querySelector("button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(tomato) {
  tomato.preventDefault();
  console.log(tomato);
  // const userName = loginInput.value;
  // console.log(userName);
}

loginForm.addEventListener("submit", onLoginSubmit);