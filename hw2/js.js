// Вашей задачей является создание веб-слайдера для отображения изображений на веб-странице. Слайдер должен позволять переключаться между изображениями и отображать их в центре экрана.
// Создайте интерфейс веб-страницы, который включает в себя следующие элементы:

// Контейнер для отображения текущего изображения.
// Кнопки "Предыдущее изображение" и "Следующее изображение" для переключения между изображениями.
// Навигационные точки (индикаторы) для быстрого переключения между изображениями.
// Используйте HTML для создания элементов интерфейса.

// Используйте JavaScript для обработки событий:

// При клике на кнопку "Предыдущее изображение" должно отображаться предыдущее изображение.
// При клике на кнопку "Следующее изображение" должно отображаться следующее изображение.
// При клике на навигационные точки, слайдер должен переключаться к соответствующему изображению.
// Слайдер должен циклически переключаться между изображениями, то есть после последнего изображения должно отображаться первое, и наоборот.

// Добавьте стилизацию для слайдера и элементов интерфейса с использованием CSS для улучшения внешнего вида.
let slideIndex = 1;
const showSlide = (n) => {
  const slides = document.querySelectorAll(".slide");
  const indiEl = document.querySelectorAll(".indicators");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let index = 0; index < slides.length; index++) {
    slides[index].style.display = "none";
  }

  for (let index = 0; index < indiEl.length; index++) {
    indiEl[index].className = indiEl[index].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  indiEl[slideIndex - 1].className += " active";
};
showSlide(slideIndex);

const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");

// console.log(nextEl.id);

let i = 1;
let c = 4;
nextEl.addEventListener("click", function (e) {
  //   let i = 0;
  if (nextEl.id > 4) {
    nextEl.id = 0;
  } else {
    nextEl.id = i;
    i++;
  }
  showSlide((slideIndex = nextEl.id + i));
});
prevEl.addEventListener("click", function (e) {
  if (prevEl.id < 1) {
    prevEl.id = 4;
  } else {
    prevEl.id = c;
    c--;
  }
  showSlide((slideIndex = nextEl.id + i));
});

const indiEl = document.querySelectorAll(".indicators");

document.addEventListener("click", function (e) {
  showSlide((slideIndex = e.target.id));
});

const cash = document.querySelector(".cash");
// let i = 0
cash.addEventListener("click", function (e) {
  // let i = 0
  console.log(i);
  i++;
});
