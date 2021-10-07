let titlearray = [
  "Кот полосатый6",
  "Кот полосатый5",
  "Кот полосатый4",
  "Кот полосатый3",
  "Кот полосатый2",
  "Кот полосатый1"
];

let descriptionarray = [
  "Коричневый окрас",
  "Коричневый окрас",
  "Коричневый окрас",
  "Коричневый окрас",
  "Коричневый окрас",
  "Коричневый окрас"
];

const dynamic = document.querySelector(".main__content");

for (let i = 0; i < titlearray.length; i++) {
  let fetch = document.querySelector(".main__content").innerHTML;
  dynamic.innerHTML =
    `
  <div class="cards">
    <div class="card__img" id="cards${i}"></div>
    <div class="cards__content">
        <h2>${titlearray[i]}</h2>
        <p>${descriptionarray[i]}</p>
        <p>30 000 руб.</p>
    </div>
    <a class="card__buy" href="https://www.google.com/"><button class="card__buy" type="submit">
        Купить
    </button></a>
</div>` + fetch;
  let bgimg = document.getElementById(`cards${i}`);
  bgimg.style.backgroundImage = `url("../img/Cards/${titlearray[i]}.svg")`;
}
