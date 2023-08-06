// brought elements from DOM

const elForm = document.querySelector(".js-form");
const elSearchForm = document.querySelector(".js-form__search");
const elSearch = document.querySelector(".js-search");
const elTitle = document.querySelector(".js-title");
const elTime = document.querySelector(".js-time");
const elList = document.querySelector(".list");

// declare default array
const missions = [
  {
    title: "Ertalab uyg'onish",
    time: "06:00"
  },
  {
    title: "Badantarbiya qilish",
    time: "06:20"
  },
  {
    title: "O'rinlani yeg'ishtirish",
    time: "06:40"
  },
  {
    title: "Nonushta qilish",
    time: "07:00"
  },
  {
    title: "O'qishga borish",
    time: "07:30"
  },
  {
    title: "Tushlik qilish",
    time: "12:30"
  },
]

// maked function rending
function renderToDo(array) {
  elList.innerHTML = "";
  array.filter(function(data) {
    const liElement = document.createElement("li");
    const timeElement = document.createElement("span");

    liElement.classList.add("item");
    timeElement.classList.add("time");

    timeElement.textContent = data.time;
    liElement.textContent = data.title;

    liElement.prepend(timeElement);
    elList.appendChild(liElement);
  })
}

renderToDo(missions);

// for adding new target to mission
elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

  const elTitleValue = elTitle.value.trim();
  const elTimeValue = elTime.value;

  const new_mission = {
    title: elTitleValue,
    time: elTimeValue
  }

  missions.push(new_mission);

  renderToDo(missions);
})

// searcher in global array
elSearchForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

  const elSearchValue = elSearch.value.trim().toLowerCase();

  let searched_misson = missions.filter(function(item) {
    let searching_title = elSearchValue == item.title.toLowerCase();
    return searching_title;
  })

  renderToDo(searched_misson);
})