const root = document.getElementById("root");
const carousel = document.querySelector(".items");

root.innerHTML = 
    `
    <div class="title">
        <h1>Carousel Vanilla JS</h1>
    </div>
    <div class="carousel">
        <div class="items">
            <div class="item">
                <img src="./assets/paisaje1.jpg" alt="paisaje1">
            </div>
            <div class="item">
                <img src="./assets/paisaje2.jpg" alt="paisaje2">
            </div>
            <div class="item">
                <img src="./assets/paisaje3.jpg" alt="paisaje3">
            </div>
            <div class="item">
                <img src="./assets/paisaje4.jpg" alt="paisaje4">
            </div>
            <div class="item">
                <img src="./assets/paisaje5.jpg" alt="paisaje5">
            </div>
            <div class="item">
                <img src="./assets/paisaje6.jpg" alt="paisaje6">
            </div>
            <div class="item">
                <img src="./assets/paisaje7.jpg" alt="paisaje7">
            </div>
            <div class="item">
                <img src="./assets/paisaje8.jpg" alt="paisaje8">
            </div>
            <div class="item">
                <img src="./assets/paisaje9.jpg" alt="paisaje9">
            </div>
            <div class="item">
                <img src="./assets/paisaje10.jpg" alt="paisaje10">
            </div>
        </div>
    </div>

    ` 
;

const carrusel = document.querySelector(".items");

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 1;
const start = () => {
  intervalo = setInterval(function () {
    carrusel.scrollLeft = carrusel.scrollLeft + step;
    if (carrusel.scrollLeft === maxScrollLeft) {
      step = step * -1;
    } else if (carrusel.scrollLeft === 0) {
      step = step * -1;
    }
  }, 10);
};

const stop = () => {
  clearInterval(intervalo);
};

carrusel.addEventListener("mouseover", () => {
  stop();
});

carrusel.addEventListener("mouseout", () => {
  start();
});

start();