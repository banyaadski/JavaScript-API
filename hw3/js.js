const picEl = document.querySelector("#pic");
const cliEl = document.querySelector(".click");
const likeel = document.querySelector(".btnlike");
const likedivel = document.querySelector(".like");
const counter_element = document.querySelector(".counter");
let data;
let countLike = 0;

async function getPhoto() {
  const url = `https://api.unsplash.com/photos/random?client_id=7FkBLVSkhIixohvT-zTRl06tqgfDYUkna6EYGt17nL0&count=1`;
  const response = await fetch(url);

  console.log(response.status);
  console.log(response.ok);
  data = await response.json();
  console.log(data[0].urls.regular);
  const img = document.createElement("img");
  img.setAttribute("src", `${data[0].urls.regular}`);
  img.setAttribute("wigth", "300");
  img.setAttribute("heigth", "300");
  picEl.append(img);
  const info = document.createElement("h1");
  info.innerHTML = `Автор фото:  ${data[0].user.name}`;
  info.style="font-size: 50px"
  picEl.append(info);
}

likeel.addEventListener("click", () => {
  render(++countLike, counter_element);
});
localStorage.setItem("like", countLike);
const render = (countLike, counter_element) => {
  counter_element.innerText = `Вам понравилось фото`;
};

getPhoto();
