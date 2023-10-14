// Вы создаете веб-страницу для отображения списка статей. Каждая статья состоит из заголовка и текста. Вам необходимо использовать Bootstrap для стилизации элементов.
// Используйте Bootstrap, чтобы стилизовать элементы:
// Заголовок статьи (<h2>)
// Текст статьи (<p>)
// Кнопки "Добавить статью", "Удалить" и "Редактировать".
// Создайте начальный список статей, который будет загружаться при загрузке страницы. Используйте JSON-данные для определения заголовков и текстов статей.
// Позвольте пользователю добавлять новые статьи. При нажатии на кнопку "Добавить статью" должна появиться новая статья с заголовком "Новая статья" и текстом "Введите содержание статьи...".
// * Реализуйте функциональность удаления статей. При нажатии на кнопку "Удалить" соответствующая статья должна быть удалена из списка.
// * Реализуйте функциональность редактирования статей. При нажатии на кнопку "Редактировать" пользователь должен иметь возможность изменить заголовок и текст статьи. Используйте всплывающее окно или prompt для ввода новых данных.
// * Все изменения (добавление, удаление, редактирование) должны быть сохранены в локальное хранилище браузера, чтобы они сохранялись после перезагрузки страницы.

const bodyEl = document.querySelector("body");
const divEl = document.createElement("div");
divEl.classList.add("main");
bodyEl.append(divEl);
const titleEl = document.createElement("h1");
titleEl.classList.add("main_h1");
titleEl.textContent = "СПИСОК СТАТЕЙ";
divEl.append(titleEl);
const buttElDiv = document.createElement("div");
buttElDiv.classList.add("button");
bodyEl.append(buttElDiv);
let count = 1;

newspaperArticle.forEach((element) => {
  const sectorEl = document.createElement("div");
  sectorEl.classList.add("main_section");
  sectorEl.setAttribute("id", count);
  count++;
  divEl.append(sectorEl);

  const hEl = document.createElement("h2");
  const pEl = document.createElement("p");
  hEl.classList.add("main_section_h");
  pEl.classList.add("main_section_p");
  hEl.textContent = element.name;
  pEl.textContent = element.text;
  sectorEl.appendChild(hEl);
  sectorEl.appendChild(pEl);

  const btnDiv = document.createElement("div");
  btnDiv.classList.add("main_section_btn");
  const redBtnEl = document.createElement("button");
  const delBtnEl = document.createElement("button");
  redBtnEl.classList.add("main_section_btn_red");
  delBtnEl.classList.add("main_section_btn_del");
  redBtnEl.textContent = "Редактировать";
  delBtnEl.textContent = "Удалить";
  btnDiv.appendChild(redBtnEl);
  btnDiv.appendChild(delBtnEl);
  sectorEl.appendChild(btnDiv);
});
const btnEl = document.createElement("button");
btnEl.classList.add("button_btn");
btnEl.textContent = "Добавить";
buttElDiv.append(btnEl);

const addBtnEl = document.querySelector(".button_btn");
console.log(addBtnEl);

addBtnEl.addEventListener("click", (e) => {
  const sectorEl = document.createElement("div");
  sectorEl.classList.add("main_section");
  sectorEl.setAttribute("id", count);
  count++;
  divEl.append(sectorEl);

  const hEl = document.createElement("h2");
  const pEl = document.createElement("p");
  hEl.classList.add("main_section_h");
  pEl.classList.add("main_section_p");
  hEl.textContent = prompt("Введите название статьи");
  pEl.textContent = prompt("А сюда информацию о статье");
  sectorEl.appendChild(hEl);
  sectorEl.appendChild(pEl);

  const btnDiv = document.createElement("div");
  btnDiv.classList.add("main_section_btn");
  const redBtnEl = document.createElement("button");
  const delBtnEl = document.createElement("button");
  redBtnEl.classList.add("main_section_btn_red");
  delBtnEl.classList.add("main_section_btn_del");
  redBtnEl.textContent = "Редактировать";
  delBtnEl.textContent = "Удалить";
  btnDiv.appendChild(redBtnEl);
  btnDiv.appendChild(delBtnEl);
  sectorEl.appendChild(btnDiv);
});

const redBtnEl = document.querySelector(".main_section_btn_red");
redBtnEl.addEventListener("click", (event) => {
  const redact = event.target.closest("main_section_h");
  console.log("redact");
});

let edit = document.querySelectorAll(".main_section_btn_red");
let text = document.querySelectorAll(".main_section_h");

function remove(){
    let w = this.closest('.main_section'), br = w.nextElementSibling;

    if(br.nodeType === 1 && br.nodeName === 'BR')
      br.remove();

    w.remove();
  }

  Array.from(document.querySelectorAll('.main_section_btn_del')).forEach(b => b.addEventListener('click', remove));


for (let i = 0; i < edit.length; i++) {
  let editMode = false;

  edit[i].addEventListener("click", function () {
    if (editMode) {
      this.textContent = "Редактировать";
      text[i].removeAttribute("contentEditable");
    } else {
      this.textContent = "Ok";
      text[i].setAttribute("contentEditable", true);
      text[i].focus();
    }

    editMode = !editMode;
  });
}
