let titlearray = [
  "Кот полосатый",
  "Кот пушистый",
  "Кот необекновенный",
  "Кот скинный",
  "Кот барбарес",
  "Кот вялый"
];

let descriptionarray = [
  "Коричневый <br /> окрас <span><b>2 мес.</b> <br /> Возраст</span> <span><b>4</b> <br /> Кол-во лап</span>",
  "Оранжевый <br /> окрас <span><b>3 мес.</b> <br /> Возраст</span> <span><b>4</b> <br /> Кол-во лап</span>",
  "Черный <br /> окрас <span><b>1,5 мес.</b> <br /> Возраст</span> <span><b>4</b> <br /> Кол-во лап</span>",
  "Серый <br /> окрас <span><b>4 мес.</b> <br /> Возраст</span> <span><b>4</b> <br /> Кол-во лап</span>",
  "Желтый <br /> окрас <span><b>3 мес.</b> <br /> Возраст</span> <span><b>4</b> <br /> Кол-во лап</span>",
  "Красный <br /> окрас <span><b>2 мес.</b> <br /> Возраст</span> <span><b>4</b> <br /> Кол-во лап</span>"
];

let pricearray = [
  "10 000 руб.",
  "30 000 руб.",
  "25 000 руб.",
  "20 000 руб.",
  "40 000 руб.",
  "30 000 руб."
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
        <div class="card__description" >${descriptionarray[i]}</div>
        <p style="font-weight: bold; font-size: 24px;">${pricearray[i]}</p>
    </div>
    <a class="card__buy" href="https://www.google.com/"><button class="card__buy" type="submit">
        Купить
    </button></a>
</div>` + fetch;
  let bgimg = document.getElementById(`cards${i}`);
  bgimg.style.backgroundImage = `url("../img/Cards/${titlearray[i]}.svg")`;
}

// Sort

function getSelectValue() {
  let selectedValue = document.getElementById("sort").value;
  console.log(selectedValue);
}
getSelectValue();
